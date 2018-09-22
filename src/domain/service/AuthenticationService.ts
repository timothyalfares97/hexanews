/**
 * Service domain for the authentication.
 */

import axios from 'axios'
import * as Config from '../../constants/config'

export default {

  login: (email: string, password: string): Promise<any> => {

    const response = axios.post(Config.LOGIN_ENDPOINT, {
      email: email,
      password: password,
    })

    return response

  },

  changePassword: (email: string, currentPassword: string, newPassword: string): Promise<any> => {

    const header = { headers: { 'token': localStorage.getItem('token') } }
    const response = axios.post(Config.CHANGE_PASSWORD_ENDPOINT, {
      email: email,
      password: currentPassword,
      newPassword: newPassword,
    }, header)

    return response

  }
}