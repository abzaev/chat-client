import { combineReducers } from 'redux';
import { messages } from './messages/reducer';
import { auth } from './auth/reducer';

export default combineReducers({
  messages,
  auth,
})
