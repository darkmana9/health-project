import React from 'react'
import {
  NumberCardBigText,
  NumberCardSmallText,
  NumberCardWrapper,
} from './components'

const NumberCard = ({children, bigText, isBlue = false}) => {
  return (

  <NumberCardWrapper>
    <NumberCardBigText color={isBlue}>
      {bigText}
    </NumberCardBigText>
   <NumberCardSmallText>
     {children}
   </NumberCardSmallText>
  </NumberCardWrapper>

  )
}

export default NumberCard