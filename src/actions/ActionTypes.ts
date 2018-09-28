/**
 * All ActionTypes that required to be used for Redux actions
 */

export enum ActionTypes {

  // ActionTypes for rehydrate all state
  GET_USER = 'hexanews/user/GET_USER',
  GET_USERS = 'hexanews/user/GET_USERS',
  GET_ARTICLES = 'hexanews/article/GET_ARTICLES',
  GET_LOGIN = 'hexanews/login/GET_LOGIN',
  GET_CATEGORIES = 'hexanews/category/GET_CATEGORIES',

  // ActionTypes for register user
  REGISTER_USER_REQUESTED = 'hexanews/user/REGISTER_USER_REQUESTED',
  REGISTER_USER_SUCCESS = 'hexanews/user/REGISTER_USER_SUCCESS',
  REGISTER_USER_FAILED = 'hexanews/user/REGISTER_USER_FAILED',

  // ActionTypes for login user
  LOGIN_USER_REQUESTED = 'hexanews/user/LOGIN_USER_REQUESTED',
  LOGIN_USER_SUCCESS = 'hexanews/user/LOGIN_USER_SUCCESS',
  LOGIN_USER_FAILED = 'hexanews/user/LOGIN_USER_FAILED',

  // ActionTypes for reset password
  RESET_PASSWORD_REQUESTED = 'hexanews/user/RESET_PASSWORD_REQUESTED',
  RESET_PASSWORD_SUCCESS = 'hexanews/user/RESET_PASSWORD_SUCCESS',
  RESET_PASSWORD_FAILED = 'hexanews/user/RESET_PASSWORD_FAILED',

  // ActionTypes for edit user
  EDIT_USER_REQUESTED = 'hexanews/user/EDIT_USER_REQUESTED',
  EDIT_USER_SUCCESS = 'hexanews/user/EDIT_USER_SUCCESS',
  EDIT_USER_FAILED = 'hexanews/user/EDIT_USER_FAILED',

  // ActionTypes for change password
  CHANGE_PASSWORD_REQUESTED = 'hexanews/user/CHANGE_PASSWORD_REQUESTED',
  CHANGE_PASSWORD_SUCCESS = 'hexanews/user/CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_FAILED = 'hexanews/user/CHANGE_PASSWORD_FAILED',

  // ActionTypes for create article
  CREATE_ARTICLE_REQUESTED = 'hexanews/article/CREATE_ARTICLE_REQUESTED',
  CREATE_ARTICLE_SUCCESS = 'hexanews/article/CREATE_ARTICLE_SUCCESS',
  CREATE_ARTICLE_FAILED = 'hexanews/article/CREATE_ARTICLE_FAILED',

  // ActionTypes for delete article
  DELETE_ARTICLE_REQUESTED = 'hexanews/article/DELETE_ARTICLE_REQUESTED',
  DELETE_ARTICLE_SUCCESS = 'hexanews/article/DELETE_ARTICLE_SUCCESS',
  DELETE_ARTICLE_FAILED = 'hexanews/article/DELETE_ARTICLE_FAILED',

  // ActionTypes for edit article
  EDIT_ARTICLE_REQUESTED = 'hexanews/article/EDIT_ARTICLE_REQUESTED',
  EDIT_ARTICLE_SUCCESS = 'hexanews/article/EDIT_ARTICLE_SUCCESS',
  EDIT_ARTICLE_FAILED = 'hexanews/article/EDIT_ARTICLE_FAILED',

  // ActionTypes for shared actions
  LOGOUT = 'hexanews/shared/LOGOUT',
  LOCATION_CHANGE = '@@router/LOCATION_CHANGE'
}