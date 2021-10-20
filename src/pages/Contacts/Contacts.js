import React from 'react'

// @todo @darkmana9 отступы между группами - 1 пустая линия, в идеале подключить конфиг еслинта airbnb базовый и настроить import/order (group) правила для него
import Text from '../../components/Text/Text'
import { Main } from './components'
import ContactForm from '../../components/ContactForm/ContactForm'

const Contacts = () => {

  return (
    <Main>
      <Text type="xlarge">Contact Us</Text>
      <ContactForm/>
    </Main>
  )
}

export default Contacts