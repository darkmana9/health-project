import React from 'react'
import { TextMedium, TextXLarge, TextXSmall } from './components'

// @todo: @darkmana9 используй полиморфный проп as (см styled components), https://styled-components.com/docs/api#forwardedas-prop + сделай этот свитч по размеру шрифта с темы в самом styled-components

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