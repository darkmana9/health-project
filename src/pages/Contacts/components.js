import styled from 'styled-components'
import { sizes } from '../../mediaQueries'

export const Main = styled.main`
  width: 500px;
  margin: 0 10%;
  padding-top: 50px;
  @media screen and ${sizes.tablet}{
    width: 80%;
  }
`