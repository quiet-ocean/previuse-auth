import { StringMap } from './models';

export const STARTED_SUFFIX = '_STARTED';
export const FAILED_SUFFIX = '_FAILED';
export const SUCCESS_SUFFIX = '_SUCCESS';

export const ROUTES: StringMap = {
  home: '/auth',
  activateUser: '/activate',
  login: '/auth/login',
  signup: '/auth/signup',
  resetPassword: '/reset-password',
  verifyAccount: '/verify-account',
};

export const MOBILE_MAX_WIDTH = 1023;
