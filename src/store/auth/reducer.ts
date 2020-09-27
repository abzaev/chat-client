import { Reducer } from 'redux'
import { UserData } from '../../types';

interface AuthState {
    isAuthenticated: Boolean;
    userData: UserData | null;
}

const initialState: AuthState = {
    isAuthenticated: false,
    userData: null,
}

const reducer: Reducer<AuthState> = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN_UP':
      return {...state, userData: action.payload}
    case 'SIGN_IN':
      return {...state, userData: action.payload, isAuthenticated: true}
    case 'AUTH': {
      return {...state, userData: action.payload, isAuthenticated: true}
    }
    default:
      return state
  }
}

export { reducer as auth };
