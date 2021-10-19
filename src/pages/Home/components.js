import styled from 'styled-components'
import { sizes } from '../../mediaQueries'

export const InfoWrapper = styled.div`
  width: 568px;
  padding-top: 97px;
  z-index: 9999;
  @media only screen and ${sizes.desktop}{
    width: 380px;
  }
  @media only screen and ${sizes.tablet}{
    width: 85%;
    margin-left: 40px;
    margin-right: auto;
    padding: 0;
  }
`
export const ImgWrapper = styled.div``
export const XLargeTextWrapper = styled.div`
  padding-top: 20px;
`
export const MediumTextWrapper = styled.div`
  padding-top: 34px;
`
export const NumberCardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 119px;
`
export const EmailInputWrapper = styled.div`
  padding-top: 50px;
`