import rootReducer from './store/rootReducer';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export interface Message {
  _id: string;
  messageText: string;
  userName: string;
  doc_id: string;
  length: number;
  name: string;
  type: string;
  file_link: string;
}

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, AppState, void, Action<string>>;
