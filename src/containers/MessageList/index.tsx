import React, { useRef, useEffect } from 'react';
import { Divider, Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { MessageListItem } from '../../components/MessageListItem';
import { Message } from '../../types';
import { deleteMessage, changeMessage } from '../../store/index';
import { AppState } from '../../types';

interface Props {
  messageList: Message[];
  roomId: number;
}

export const MessageList = (props: Props) => {
  const userData = useSelector((state: AppState) => state.auth.userData);
  const dispatch = useDispatch();
  const { messageList, roomId } = props;

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    // @ts-ignore
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  }
  useEffect(scrollToBottom, [messageList]);

  return (
    <>
      {messageList.map((msg: Message) => (
        <Grid container direction="column" justify="flex-start">
          <MessageListItem
            userData={userData}
            deleteMessage={(id: Message['_id']) => dispatch(deleteMessage(id, roomId))}
            changeMessage={(message: Message) => dispatch(changeMessage(message, roomId))}
            msg={msg}
          />
          <Divider component="li" />
        </Grid>
      ))}
      <div ref={messagesEndRef} />
    </>
  )
};
