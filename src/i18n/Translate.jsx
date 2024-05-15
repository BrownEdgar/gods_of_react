
import { FormattedMessage } from 'react-intl'

export default function Translate({ id, value, tagName = "p", className }) {
  return (
    <FormattedMessage id={id} values={{ ...value }} tagName={tagName} >
      {
        (text) => {
          const Element = tagName;
          return <Element className={className}>
            {text}
          </Element>
        }
      }
    </FormattedMessage>
  )
}
