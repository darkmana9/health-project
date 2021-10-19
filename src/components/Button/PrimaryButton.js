import React from 'react'
import { Button } from './components'

const PrimaryButton = (props) => {
  return (
    <Button>{props.children}</Button>
  )
}

export default PrimaryButton