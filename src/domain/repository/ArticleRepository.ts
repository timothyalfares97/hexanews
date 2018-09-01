/**
 * Repository domain for the article.
 */

import axios from 'axios'

import { Article } from '../model/Article'
import * as Config from '../../constants/config'

export default {

  create: async (article: Article): Promise<any> => {

    const response = await axios.post(Config.ARTICLE_ENDPOINT, article)

    return response
  },

  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ARTICLE_ENDPOINT)

    return response
  },
}