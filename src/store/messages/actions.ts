import { Message } from '../../types';

export const fetchMessages = (messages: Message[]) =>
  ({
    type: 'FETCH_MESSAGES',
    payload: messages,
  } as const);

export const fetchMessage = (messages: Message) =>
  ({
    type: 'FETCH_MESSAGE',
    payload: messages,
  } as const);
