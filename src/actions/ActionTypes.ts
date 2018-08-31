/**
 * ActionTypes for Redux actions.
 */
export enum ActionTypes {
  // user profile
  GET_USER = 'hexanews/user/GET_USER',

  // register
  REGISTER_USER_REQUESTED = 'hexanews/user/REGISTER_USER_REQUESTED',
  REGISTER_USER_SUCCESS = 'hexanews/user/REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILED = 'hexanews/user/REGISTER_USER_FAILED',

  // login
  LOGIN_USER_REQUESTED = 'hexanews/user/LOGIN_USER_REQUESTED',
  LOGIN_USER_SUCCESS = 'hexanews/user/LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILED = 'hexanews/user/LOGIN_USER_FAILED',

  // shared
  LOGOUT = 'hexanews/shared/LOGOUT',
}