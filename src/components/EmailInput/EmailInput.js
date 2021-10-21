import React from 'react'

import { Email, Mail } from './components'
import { PrimaryButton } from '../Button'

export const EmailInput = () => {
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

