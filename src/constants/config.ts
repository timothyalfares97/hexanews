const API_ENDPOINT = 'http://192.168.0.15:4000'

export const USER_ENDPOINT = `${API_ENDPOINT}/users`

export const HEADER_LINK = {
  articleDetail: '/articleDetail',
  categories: '/categories',
  category: (item: string) => `/category/${item}`,
  createArticle: '/createArticle',
  profile: '/profile',
  searchArticle: '/searchArticle',
}