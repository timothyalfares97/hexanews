/**
 * Service domain for the authentication.
 */
import axios from 'axios'
import * as Config from '../../constants/config'

export default {

  login: (email: string, password: string): Promise<any> => (
    axios.post(Config.LOGIN_ENDPOINT, {
      email: email,
      password: password,
    })
  )

}