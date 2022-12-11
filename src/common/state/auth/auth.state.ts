import User from './auth.models';

export interface AuthState {
  loggedInUser?: User;
}

const authInitialState: AuthState = {
  loggedInUser: undefined
};

export default authInitialState;
