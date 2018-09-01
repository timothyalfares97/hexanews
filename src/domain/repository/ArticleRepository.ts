/**
 * Repository domain for the article.
 */

import axios from 'axios'

import { Article } from '../model/Article'
import * as Config from '../../constants/config'

export default {

  createArticle: async (article: Article): Promise<any> => {

    const response = await axios.post(Config.ARTICLE_ENDPOINT, article)

    return response
  }
}