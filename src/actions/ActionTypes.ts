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

  // article
  CREATE_ARTICLE_REQUESTED = 'hexanews/article/CREATE_ARTICLE_REQUESTED',
  CREATE_ARTICLE_SUCCESS = 'hexanews/user/CREATE_ARTICLE_SUCCESS',
  CREATE_ARTICLE_FAILED = 'hexanews/user/CREATE_ARTICLE_FAILED',

  // shared
  LOGOUT = 'hexanews/shared/LOGOUT',
}