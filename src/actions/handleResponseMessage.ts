/**
 * Actions for handle response message from the server
 */

import { RESPONSE_CODE } from '../constants/config'

/**
 * All attribute of Data object from Response
 */
type Data = {
  code: string,
  message: string
}

/**
 * All attribute for Response object from server side
 */
type Response = {
  data: Data
}

/**
 * Handle response message from the server and then execute based on the information
 * @param message The error message that got mapped
 */
export const handleResponseMessage = (response: Response, successCallback: () => any) => {

  switch (response.data.code) {
    case RESPONSE_CODE.success:
      successCallback()
      break
    case RESPONSE_CODE.jwtError:
      window.location.reload()
      throw response.data.message
    default:
      throw response.data.message
  }

}
