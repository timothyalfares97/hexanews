/**
 * Repository domain for the article.
 */

import axios from 'axios'

import { Article } from '../model/Article'
import * as Config from '../../constants/config'

export default {

  create: async (article: Article): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.post(Config.ARTICLE_ENDPOINT, article, header)

    return response
  },

  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ARTICLE_ENDPOINT)

    return response
  },

  edit: async (edittedArticle: Article) => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.put(`${Config.ARTICLE_ENDPOINT}/${edittedArticle._id}`, {
      title: edittedArticle.title,
      description: edittedArticle.description,
      authorId: edittedArticle.authorId,
      category: edittedArticle.category,
    }, header)

    return response
  },

  delete: async (id: string): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.delete(`${Config.ARTICLE_ENDPOINT}/${id}`, header)

    return response
  },
}