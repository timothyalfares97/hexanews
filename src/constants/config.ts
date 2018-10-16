/**
 * All constants variable that related to the application configuration
 */

import * as ip from 'ip'

// API endpoint that get from the port 4000 and ip based on the current one
const API = `http://${ip.address()}:4000`

// Config for all endpoint paths
export const ENDPOINT = {
  user: `${API}/users`,
  category: `${API}/categories`,
  login: `${API}/auth/login`,
  resetPassword: `${API}/auth/resetPassword`,
  changePassword: `${API}/auth/changePassword`,
  article: `${API}/articles`
}

// Config for all header navigation paths
export const HEADER_LINK = {
  articleDetail: (articleId: string) => `/articleDetail/${articleId}`,
  articleDetailRow: (articleId: string) => `../articleDetail/${articleId}`,
  categories: '/categories',
  category: (item: string) => `/category/${item}`,
  createArticle: '/createArticle',
  profile: '/profile',
  searchArticle: '/searchArticle',
}

// Config for date format in application
export const DATE_FORMAT = 'D MMMM YYYY'

// Config for React Quill component
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

// Config for all of the response code
export const RESPONSE_CODE = {
  success: 'SUCCESS',
  jwtError: 'JWTERROR',
  error: 'ERROR'
}

// Config for the application title
export const HEXANEWS_TITLE = 'Hexanews'