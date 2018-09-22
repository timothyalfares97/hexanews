/**
 * Service domain for the authentication.
 */

import axios from 'axios'
import * as Config from '../../constants/config'

export default {

  login: (email: string, password: string): Promise<any> => {

    const response = axios.post(Config.ENDPOINT.login, {
      email: email,
      password: password,
    })

    return response

  },

  changePassword: (email: string, currentPassword: string, newPassword: string): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = axios.post(Config.ENDPOINT.changePassword, {
      email: email,
      password: currentPassword,
      newPassword: newPassword,
    }, header)

    return response

  }
}