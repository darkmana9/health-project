import React from 'react'

import { TextMedium, TextWrapper, TextXLarge, TextXSmall } from './components'

export const Text = ({ children, type }) => {
  const renderSwitch = (type, text) => {
    switch (type) {
      case 'xlarge': {
        return <TextWrapper as={TextXLarge}>{text}</TextWrapper>
      }
      case 'medium': {
        return <TextWrapper as={TextMedium}>{text}</TextWrapper>
      }
      case 'xsmall': {
        return <TextWrapper as={TextXSmall}>{text}</TextWrapper>
      }
      default: {
        return <TextWrapper as={TextMedium}>{text}</TextWrapper>
      }
    }
  }
  return (
    <> {renderSwitch(type, children)}</>
  )
}