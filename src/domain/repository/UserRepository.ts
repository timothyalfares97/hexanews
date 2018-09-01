/**
 * Repository domain for the user.
 */
import axios from 'axios'
import * as Config from '../../constants/config'

export default {

  createUser: async (email: string, password: string, name: string): Promise<any> => {

    const response = await axios.post(Config.USER_ENDPOINT, {
      email: email,
      password: password,
      name: name,
    })

    return response
  },

  getUser: async (id: string) => {

    const response = await axios.get(`${Config.USER_ENDPOINT}/${id}`)

    return response
  },

  changeName: async (id: string, newName: string) => {

    const response = await axios.put(`${Config.USER_ENDPOINT}/${id}`, {
      name: newName,
    }, Config.HEADER)

    return response
  },
}