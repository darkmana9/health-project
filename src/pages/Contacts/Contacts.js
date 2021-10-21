import React from 'react'

import { Main } from './components'
import { ContactForm } from '../../components/ContactForm'
import { Text } from '../../components/Text'


const Contacts = () => {
  return (
    <Main>
      <Text type="xlarge">Contact Us</Text>
      <ContactForm/>
    </Main>
  )
}

export default Contacts