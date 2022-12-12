import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints';
import { SendEmailReset, TokenObtainPair, TokenRefresh } from '../../../swagger2Ts/interfaces';

export enum AuthActionTypes {
  LOGIN = '@@auth/LOGIN',
  SIGNUP = '@@auth/SIGNUP',
  RESET_PASSWORD = '@@auth/RESET_PASSWORD',
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

export const ResetPasswordAction: (args: SendEmailReset) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.RESET_PASSWORD,
  (args) => HttpService.fetch({ ...EndPoints.auth_users_reset_password, body: JSON.stringify(args) }),
  false
);
