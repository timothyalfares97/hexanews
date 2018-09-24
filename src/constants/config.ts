/**
 * All constants variable that related to the application configuration
 */

import * as ip from 'ip'

const API = `http://${ip.address()}:4000`

export const ENDPOINT = {
  user: `${API}/users`,
  category: `${API}/categories`,
  login: `${API}/auth/login`,
  resetPassword: `${API}/auth/resetPassword`,
  changePassword: `${API}/auth/changePassword`,
  article: `${API}/articles`
}

export const HEADER_LINK = {
  articleDetail: (articleId: string) => `/articleDetail/${articleId}`,
  articleDetailRow: (articleId: string) => `../articleDetail/${articleId}`,
  categories: '/categories',
  category: (item: string) => `/category/${item}`,
  createArticle: '/createArticle',
  profile: '/profile',
  searchArticle: '/searchArticle',
}

export const DATE_FORMAT = 'D MMMM YYYY'

export const TEXT_EDITOR = {
  modules: {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{size: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block'],
      [{'list': 'ordered'}, {'list': 'bullet'},
      {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  },
  formats: [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'link', 'image'
  ],
  theme: 'snow'
}

export const RESPONSE_CODE = {
  success: 'SUCCESS',
  jwtError: 'JWTERROR',
  error: 'ERROR'
}

export const HEXANEWS_TITLE = 'Hexanews'