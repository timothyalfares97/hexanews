/**
 * Repository domain for Category object that contains get all operations.
 */

import axios from 'axios'

import * as Config from '../../constants/config'

export default {

  /**
   * Function that request the server to get all categories from the Hexanews site
   * @returns {Promise<any>}
   */
  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ENDPOINT.category)

    return response
  },

}