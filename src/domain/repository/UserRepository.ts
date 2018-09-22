/**
 * Repository domain for the user.
 */

import axios from 'axios'

import { User } from '../model/User'
import * as Config from '../../constants/config'

export default {

  create: async (email: string, password: string, name: string): Promise<any> => {

    const response = await axios.post(Config.ENDPOINT.user, {
      email: email,
      password: password,
      name: name,
    })

    return response
  },

  get: async (id: string) => {

    const response = await axios.get(`${Config.ENDPOINT.user}/${id}`)

    return response
  },

  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ENDPOINT.user)

    return response
  },

  edit: async (edittedUser: User) => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = await axios.put(`${Config.ENDPOINT.user}/${edittedUser._id}`, {
      email: edittedUser.email,
      name: edittedUser.name,
      description: edittedUser.description,
    }, header)

    return response
  },

}