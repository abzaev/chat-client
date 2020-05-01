import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Paper,
  Toolbar,
  List,
} from '@material-ui/core';
import { MessageList } from '../MessageList';
import { SendMessagePanel } from '../SendMessagePanel'; 
import { AppState } from '../../types';
import { fetchMessagesCreator, fetchMessageCreator, joinToRoom } from '../../store/index';

interface TabPanelProps {
  roomId: number;
}

export const TabPanel = (props: TabPanelProps) => {
  const dispatch = useDispatch();
  const messageList = useSelector((state: AppState) => state.messages.messages);
  const { roomId } = props;

  useEffect(() => {
    joinToRoom(roomId);
  }, [roomId])

  useEffect(() => {
    dispatch(fetchMessagesCreator());
    dispatch(fetchMessageCreator());
  }, [dispatch])

  return (
    <>
      <List>
        <Paper>
          <MessageList roomId={roomId} messageList={messageList} />
        </Paper>
      </List>

      <Toolbar />

      <SendMessagePanel />
    </>
  );
}
