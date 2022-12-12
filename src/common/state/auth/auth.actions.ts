import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints';

import {
  Activation,
  PasswordResetConfirm,
  SendEmailReset,
  TokenObtainPair,
  TokenRefresh,
} from '../../../swagger2Ts/interfaces';

export enum AuthActionTypes {
  LOGIN = '@@auth/LOGIN',
  SIGNUP = '@@auth/SIGNUP',
  RESET_PASSWORD = '@@auth/RESET_PASSWORD',
  RESET_PASSWORD_CONFIRM = '@@auth/RESET_PASSWORD_CONFIRM',
  ACTIVATE_USER = '@@auth/ACTIVATE_USER',
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

export const ResetPasswordConfirmAction: (args: PasswordResetConfirm) => Promise<void> = createAsyncAction(
  AuthActionTypes.RESET_PASSWORD_CONFIRM,
  (args) => HttpService.fetch({ ...EndPoints.auth_users_reset_password_confirm, body: JSON.stringify(args) }),
  false
);

export const ActivateUserAction: (args: Activation) => Promise<void> = createAsyncAction(
  AuthActionTypes.ACTIVATE_USER,
  (args) => HttpService.fetch({ ...EndPoints.auth_jwt_verify_create, body: JSON.stringify(args) }),
  false
);
