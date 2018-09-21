/**
 * Repository domain for the article.
 */

import axios from 'axios'

import { Article } from '../model/Article'
import * as Config from '../../constants/config'

export default {

  create: async (article: Article): Promise<any> => {

    const response = await axios.post(Config.ARTICLE_ENDPOINT, article, Config.HEADER)

    return response
  },

  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ARTICLE_ENDPOINT)

    return response
  },

  edit: async (id: string, edittedArticle: Article) => {

    const response = await axios.put(`${Config.ARTICLE_ENDPOINT}/${id}`, {
      title: edittedArticle.title,
      description: edittedArticle.description,
      authorId: edittedArticle.authorId,
      category: edittedArticle.category,
    }, Config.HEADER)

    return response
  },

  delete: async (id: string): Promise<any> => {

    const response = await axios.delete(`${Config.ARTICLE_ENDPOINT}/${id}`, Config.HEADER)

    return response
  },
}