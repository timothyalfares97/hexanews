/**
 * Repository domain for Article object that contains all CRUD operations.
 */

import axios from 'axios'

import { Article } from '../model/Article'
import * as Config from '../../constants/config'

export default {

  /**
   * Function that request the server to create an article in the Hexanews site
   * @param article the article to be created
   * @returns {Promise<any>}
   */
  create: async (article: Article): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.post(Config.ENDPOINT.article, article, header)

    return response
  },

  /**
   * Function that request the server to get all articles from the Hexanews site
   * @returns {Promise<any>}
   */
  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ENDPOINT.article)

    return response
  },

  /**
   * Function that request the server to edit an article in Hexanews site
   * @param edittedArticle the article that want to be editted
   * @returns {Promise<any>}
   */
  edit: async (edittedArticle: Article): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.put(`${Config.ENDPOINT.article}/${edittedArticle._id}`, {
      title: edittedArticle.title,
      description: edittedArticle.description,
      authorId: edittedArticle.authorId,
      category: edittedArticle.category,
    }, header)

    return response
  },

  /**
   * Function that request the server to delete an article in Hexanews site
   * @param id the article id that want to be deleted
   * @returns {Promise<any>}
   */
  delete: async (id: string): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.delete(`${Config.ENDPOINT.article}/${id}`, header)

    return response
  },
}