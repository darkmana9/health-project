import React from 'react'
import { Button } from './components'

const PrimaryButton = ({ children, type }) => {
  return (
    <Button type={type}>{children}</Button>
  )
}

export default PrimaryButton