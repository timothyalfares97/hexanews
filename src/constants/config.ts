/**
 * Constants for configuration.
 */

import * as ip from 'ip'

const API_ENDPOINT = `http://${ip.address()}:4000`

export const USER_ENDPOINT = `${API_ENDPOINT}/users`

const AUTH_ENDPOINT = `${API_ENDPOINT}/auth`

export const LOGIN_ENDPOINT = `${AUTH_ENDPOINT}/login`

export const ARTICLE_ENDPOINT = `${API_ENDPOINT}/articles`

export const HEADER_LINK = {
  articleDetail: '/articleDetail',
  categories: '/categories',
  category: (item: string) => `/category/${item}`,
  createArticle: '/createArticle',
  profile: '/profile',
  searchArticle: '/searchArticle',
}