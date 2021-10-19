import React from 'react'
import PrimaryButton from '../Button/PrimaryButton'
import { Email, Mail } from './components'

const EmailInput = () => {
  return (
    <Email>
      <Mail/>
      <input type="email" placeholder="Enter your email"/>
      <PrimaryButton>
        Get Started
      </PrimaryButton>
    </Email>
  )
}

export default EmailInput