import rootReducer from './store/rootReducer';
import { ThunkAction } from 'redux-thunk';
import { Action } from 'redux';

export interface Message {
  _id: string;
  messageText: string;
  userLogin: string;
  userId: string;
  doc_id: string;
  length: number;
  name: string;
  type: string;
  file_link: string;
}

export interface UserData {
  id: string;
  login: string;
}

export interface UserLogin {
  login: string;
  password: string;
}

export type AppState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, AppState, void, Action<string>>;
