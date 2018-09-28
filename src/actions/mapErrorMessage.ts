/**
 * Actions for map all error message available from the server
 */

import i18n from '../i18n'

/**
 * Map the error message code that got from the server with internationalisation
 * @param message The error message that got mapped
 */
export const mapErrorMessage = (message: string) => {

  let mappedError = message

  switch (message) {
    case 'INVALID_PASSWORD':
      mappedError = i18n.t('errorMessage.invalidPassword')
      break
    case 'USER_NOT_FOUND':
      mappedError = i18n.t('errorMessage.userNotFound')
      break
    case 'USER_EXISTED':
      mappedError = i18n.t('errorMessage.userExisted')
      break
    case 'SESSION_EXPIRED':
      mappedError = i18n.t('errorMessage.sessionExpired')
      break
    default:
      mappedError = i18n.t('errorMessage.unexpectedError')
  }

  return mappedError
}
