/**
 * Repository domain for the category.
 */

import axios from 'axios'

import * as Config from '../../constants/config'

export default {

  getAll: async (): Promise<any> => {

    const response = await axios.get(Config.ENDPOINT.category)

    return response
  },

}