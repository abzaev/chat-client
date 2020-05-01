import React from 'react';
import { Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { MessageListItem } from '../../components/MessageListItem';
import { Message } from '../../types';
import { deleteMessage, changeMessage } from '../../store/index';

interface Props {
  messageList: Message[];
  roomId: number;
}

export const MessageList = (props: Props) => {
  const dispatch = useDispatch();
  const { messageList, roomId } = props;

  return (
    <>
      {messageList.map((msg: Message) => (
        <>
          <MessageListItem
            deleteMessage={(id: Message['_id']) => dispatch(deleteMessage(id, roomId))}
            changeMessage={(message: Message) => dispatch(changeMessage(message, roomId))}
            msg={msg}
          />
          <Divider component="li" />
        </>
      ))}
    </>
  )
};
