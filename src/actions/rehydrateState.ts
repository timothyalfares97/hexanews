/**
 * actions for setup application.
 */

import { ActionTypes } from './ActionTypes'
import ArticleRepository from '../domain/repository/ArticleRepository'
import CategoryRepository from '../domain/repository/CategoryRepository'
import UserRepository from '../domain/repository/UserRepository'
import i18n from '../i18n'

export const rehydrateState = async (store: any) => {
  const articles = await ArticleRepository.getAll()
  store.dispatch({ type: ActionTypes.GET_ARTICLES, articles: articles.data.message })

  const users = await UserRepository.getAll()
  store.dispatch({ type: ActionTypes.GET_USERS, users: users.data.message })

  const categories = await CategoryRepository.getAll()
  store.dispatch({ type: ActionTypes.GET_CATEGORIES, categories: categories.data.message })

  const isLoggedIn = await !!localStorage.getItem('token')
  store.dispatch({ type: ActionTypes.GET_LOGIN, isLoggedIn })

  const id = localStorage.getItem('id')
  if (id !== null) {
    const user = await UserRepository.get(id)
    store.dispatch({ type: ActionTypes.GET_USER, user: user.data.message })
  }

  const localLanguage = localStorage.getItem('language')
  const currentLanguage = localLanguage !== null ? localLanguage : 'en'
  i18n.changeLanguage(currentLanguage)
}
