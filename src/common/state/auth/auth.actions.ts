import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints';
import { TokenObtainPair, TokenRefresh } from '../../../swagger2Ts/interfaces';

export enum AuthActionTypes {
  LOGIN = '@@auth/LOGIN',
  SIGNUP = '@@auth/SIGNUP',
}

export const LoginAction: (args: TokenObtainPair) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.LOGIN,
  (args) => HttpService.fetch({ ...EndPoints.auth_jwt_create_create, body: JSON.stringify(args) }),
  false
);

export const SignUpAction: (args: TokenObtainPair) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.SIGNUP,
  (args) => HttpService.fetch({ ...EndPoints.auth_users_create, body: JSON.stringify(args) }),
  false
);
