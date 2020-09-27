import { UserData } from '../../types';

export const signUp = (userData: UserData) =>
  ({
    type: 'SIGN_UP',
    payload: userData,
  } as const);

export const signIn = (userData: UserData) =>
  ({
  type: 'SIGN_IN',
  payload: userData,
  } as const);

export const auth = (userData: UserData) =>
  ({
  type: 'AUTH',
  payload: userData,
  } as const);
