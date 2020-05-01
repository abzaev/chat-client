import openSocket from 'socket.io-client';
import axios from 'axios';
import { Message, AppThunk } from '../../types';
import { fetchMessages, fetchMessage } from './actions';

const socket = openSocket('/');

export const joinToRoom = (roomId: number) => {
  socket.emit('join', roomId);
}

export const fetchMessagesCreator = (): AppThunk => async dispatch => {
  socket.on('allMessages', (messages: Message[]) => dispatch(fetchMessages(messages)));
};

export const fetchMessageCreator = (): AppThunk => async dispatch => {
  socket.on('chat message', (messages: Message) => dispatch(fetchMessage(messages)));
};

export const deleteMessage = (id: Message['_id'], roomId: number): AppThunk => async () => {
  if (roomId === 0) {
    await axios.delete(`/messagework/${id}`);
  } else {
    await axios.delete(`/messageflud/${id}`);
  }
  joinToRoom(roomId)
};

export const changeMessage = (message: Message, roomId: number): AppThunk => async () => {
  const {_id, ...other} = message;
  if (roomId === 0) {
    await axios.put(`/messagework/${_id}`, other);
  } else {
    await axios.put(`/messageflud/${_id}`, other);
  }
  joinToRoom(roomId);
};

export const sendMessage = (message: any) => {
  if (message.file) {
    message.fileType = message.file.type;
    message.fileName = message.file.name;
  }
  socket.emit('chat message', message);
}
