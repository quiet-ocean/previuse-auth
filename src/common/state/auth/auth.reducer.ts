import authInitialState, { AuthState } from './auth.state';
import { AnyAction, Reducer } from 'redux';

const authReducer: Reducer<AuthState> = (
  state = authInitialState,
  action: AnyAction
) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
