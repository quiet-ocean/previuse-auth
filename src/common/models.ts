/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, StateType } from 'typesafe-actions';
import rootReducer from './reducers';
import { Dispatch, AnyAction } from 'redux';

export interface StringMap {
  [s: string]: string;
}

export type RootState = StateType<typeof rootReducer>;

export interface Endpoint {
  url: string;
  method?: string;
  contentType?: string;
  body?: any;
}

export type AsyncAction = (type: string, fn: (params?: any) => Promise<any>, catchError?: boolean) => any;

export type ActionCreator = (
  args?: any
) => (dispatch: Dispatch<Action, AnyAction>, getState: () => RootState) => any;

export declare type SnackBarType = 'error' | 'success';

export interface GoogleAuthUrl {
  authorization_url: string;
}

export interface GoogleLoginArgs {
  state: string;
  code: string;
}