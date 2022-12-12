import createAsyncAction from '../../../utils/createAsyncAction';
import HttpService from '../../services/http.service';
import EndPoints from '../../../swagger2Ts/endpoints';
import { TokenObtainPair, TokenRefresh } from '../../../swagger2Ts/interfaces';

export enum AuthActionTypes {
  LOGIN = '@@auth/LOGIN'
}

export const LoginAction: (args: TokenObtainPair) => Promise<TokenRefresh> = createAsyncAction(
  AuthActionTypes.LOGIN,
  (args) => HttpService.fetch({ ...EndPoints.auth_jwt_create_create, body: JSON.stringify(args) }),
  false  
);
