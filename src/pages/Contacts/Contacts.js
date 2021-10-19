import React from 'react'
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