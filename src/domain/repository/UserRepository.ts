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
  }
}