import styled from 'styled-components'
import { sizes } from '../mediaQueries'

export const LayoutWrapper = styled.div`
  padding-top: 149px;
  padding-left: 8%;
  @media screen and ${sizes.tablet} {
    padding-left: 0;
    padding-top: 23px;
  }
`
export const MainWrapper = styled.main`
  display: flex;
  flex-direction: row;
  @media only screen and ${sizes.tablet} {
    flex-direction: column-reverse;
  }
`