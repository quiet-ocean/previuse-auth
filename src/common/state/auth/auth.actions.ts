import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints';

import {
  Activation,
  PasswordResetConfirm,
  ProviderAuth,
  SendEmailReset,
  TokenObtainPair,
  TokenRefresh,
} from '../../../swagger2Ts/interfaces';
import { GoogleAuthUrl, GoogleLoginArgs } from '../../models';

export enum AuthActionTypes {
  LOGIN = '@@auth/LOGIN',
  SIGNUP = '@@auth/SIGNUP',
  RESET_PASSWORD = '@@auth/RESET_PASSWORD',
  RESET_PASSWORD_CONFIRM = '@@auth/RESET_PASSWORD_CONFIRM',
  ACTIVATE_USER = '@@auth/ACTIVATE_USER',
  GET_GOOGLE_AUTH_URL = '@@auth/GET_GOOGLE_AUTH_URL',
  GOOGLE_LOGIN = '@@auth/GOOGLE_LOGIN',
}

export const LoginAction: (args: TokenObtainPair) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.LOGIN,
  (args) => {
    const options = {
      ...EndPoints.auth_jwt_create_create,
      contentType: 'application/json'
    }

    return HttpService.fetch({ ...options, body: JSON.stringify(args) });
  },
  false
);

export const SignUpAction: (args: TokenObtainPair) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.SIGNUP,
  (args) => {
    const options = {
      ...EndPoints.auth_users_create,
      contentType: 'application/json'
    }

    return HttpService.fetch({ ...options, body: JSON.stringify(args) })
  },
  false
);

export const ResetPasswordAction: (args: SendEmailReset) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.RESET_PASSWORD,
  (args) => {
    const options = {
      ...EndPoints.auth_users_reset_password,
      contentType: 'application/json'
    }

    return HttpService.fetch({ ...options, body: JSON.stringify(args) })
  },
  false
);

export const ResetPasswordConfirmAction: (args: PasswordResetConfirm) => Promise<void> = createAsyncAction(
  AuthActionTypes.RESET_PASSWORD_CONFIRM,
  (args) => {
    const options = {
      ...EndPoints.auth_users_reset_password_confirm,
      contentType: 'application/json'
    }

    return HttpService.fetch({ ...options, body: JSON.stringify(args) })
  },
  false
);

export const ActivateUserAction: (args: Activation) => Promise<void> = createAsyncAction(
  AuthActionTypes.ACTIVATE_USER,
  (args) => {
    const options = {
      ...EndPoints.auth_users_activation,
      contentType: 'application/json'
    }

    return HttpService.fetch({ ...options, body: JSON.stringify(args) });
  },
  false
);

export const GoogleLoginAction: (args: GoogleLoginArgs) => Promise<ProviderAuth> = createAsyncAction(
  AuthActionTypes.GOOGLE_LOGIN,
  (args) => {
    const options = {
      method: 'POST',
      url: `/social-auth/o/google-oauth2/?state=${args.state}&code=${args.code}`,
      contentType: 'application/json'
    }

    return HttpService.fetch({ ...options, body: JSON.stringify(args) });
  },
  false
);

export const GetGoogleAuthUrlAction: () => Promise<GoogleAuthUrl> = createAsyncAction(
  AuthActionTypes.GET_GOOGLE_AUTH_URL,
  () => HttpService.fetch({
    url: `/social-auth/o/google-oauth2/?redirect_uri=${window.location.origin}/google`
  })
);
