import React from 'react'

import { Button } from './components'

export const PrimaryButton = ({ children, type }) => {
  return (
    <Button type={type}>{children}</Button>
  )
}