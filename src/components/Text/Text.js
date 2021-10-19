import React from 'react'
import { TextMedium, TextXLarge, TextXSmall } from './components'

const Text = ({ children, type }) => {
  const renderSwitch = (type, text) => {
    switch (type) {
      case 'xlarge': {
        return <TextXLarge>{text}</TextXLarge>
      }
      case 'medium': {
        return <TextMedium>{text}</TextMedium>
      }
      case 'xsmall': {
        return <TextXSmall>{text}</TextXSmall>
      }
      default: {
        return <TextMedium>{text}</TextMedium>
      }
    }
  }
  return (
    <> {renderSwitch(type, children)}</>
  )
}

export default Text