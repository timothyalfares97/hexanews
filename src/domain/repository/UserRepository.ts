/**
 * Repository domain for User object that contains all CRUD operations.
 */

import axios from 'axios'

import { User } from '../model/User'
import * as Config from '../../constants/config'

export default {

  /**
   * Function that request the server to create a user in the Hexanews site
   * @param email the user's email that will be created
   * @param password the user's password that will be created
   * @param name the user's name that will be created
   * @returns {Promise<any>}
   */
  create: async (email: string, password: string, name: string): Promise<any> => {

    const response = await axios.post(Config.ENDPOINT.user, {
      email: email,
      password: password,
      name: name,
    })

    return response
  },

  /**
   * Function that request the server to get a user by id from the Hexanews site
   * @param id the id that will be associated with the user
   * @returns {Promise<any>}
   */
  get: async (id: string): Promise<any> => {

    const response = await axios.get(`${Config.ENDPOINT.user}/${id}`)

    return response
  },

  /**
   * Function that request the server to get all users from the Hexanews site
   * @returns {Promise<any>}
   */
  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ENDPOINT.user)

    return response
  },

  /**
   * Function that request the server to edit a user in Hexanews site
   * @param edittedUser the user that want to be editted
   * @returns {Promise<any>}
   */
  edit: async (edittedUser: User): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.put(`${Config.ENDPOINT.user}/${edittedUser._id}`, {
      email: edittedUser.email,
      name: edittedUser.name,
      description: edittedUser.description,
    }, header)

    return response
  },

}