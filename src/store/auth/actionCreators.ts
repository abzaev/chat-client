import axios from 'axios';
import { AxiosResponse } from 'axios';
import { signUp, signIn, auth } from './actions';
import { UserLogin, AppThunk, UserData } from '../../types';


export const signUpCreator = (userLogin: UserLogin): AppThunk => {
  return async dispatch => {
    const { data }: AxiosResponse<UserData> = await axios.post('/signup', userLogin)
    dispatch(signUp(data))
  }
}

export const signInCreator = (userLogin: UserLogin): AppThunk => {
  return async dispatch => {
    const { data }: AxiosResponse<UserData> = await axios.post('/login', userLogin)
    dispatch(signIn(data))
  }
}

export const authCreator = (): AppThunk => {
  return async dispatch => {
    const { data }: AxiosResponse<UserData> = await axios.get('/auth');
    dispatch(auth(data))
  }
}
