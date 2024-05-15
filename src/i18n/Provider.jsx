import { Fragment } from 'react'
import { IntlProvider } from 'react-intl'
import LOCALES from './locale'
import messages from './messages'

export default function Provider({ children, locale }) {
  return (
    <IntlProvider
      textComponent={Fragment}
      locale={locale}
      defaultLocale={LOCALES.ENGLISH}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  )
}
