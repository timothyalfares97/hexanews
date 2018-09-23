/**
 * Service domain for the authentication.
 */

import axios from 'axios'
import * as Config from '../../constants/config'

export default {

  /**
   * Function that request the server to check the user credential and get the return token if success
   * @param email the user's email that will be checked in the database
   * @param password the user's password that will be checked based on the email
   * @returns {Promise<any>}
   */
  login: (email: string, password: string): Promise<any> => {

    const response = axios.post(Config.ENDPOINT.login, {
      email: email,
      password: password,
    })

    return response

  },

  /**
   * Function that request the server to reset a user password
   * @param email the user's email that want to reset the password
   * @returns {Promise<any>}
   */
  resetPassword: (email: string): Promise<any> => {

    const response = axios.post(Config.ENDPOINT.resetPassword, {
      email: email,
    })

    return response

  },

  /**
   * Function that request the server to change the user password
   * @param email the user's email that want to change the password
   * @param currentPassword the user's current password that will be checked based on the email
   * @param newPassword the user's new password that will be became the replacement of the current one
   * @returns {Promise<any>}
   */
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