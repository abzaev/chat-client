import { Reducer } from 'redux'
import { Message } from '../../types';

interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: [],
}

const reducer: Reducer<MessagesState> = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MESSAGES':
      return {...state, messages: action.payload}
    case 'FETCH_MESSAGE':
      return {...state, messages: [...state.messages, action.payload]}
    default:
      return state
  }
}

export { reducer as messages };
