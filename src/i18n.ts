import * as i18n from 'i18next'
import * as Backend from 'i18next-xhr-backend'
import { reactI18nextModule } from 'react-i18next'

import locales from './constants/locales'

const instance = i18n
  .use(Backend)
  .use(reactI18nextModule)
  .init({
    resources: locales,
    lng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },
  })

export default instance