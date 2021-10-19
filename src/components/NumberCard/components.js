import styled from 'styled-components'
import { sizes } from '../../mediaQueries'

export const NumberCardWrapper = styled.div`
  width: 144px;
  @media ${sizes.tablet} {
    display: none;
  }
`
export const NumberCardBigText = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[4]}px;
  line-height: 66px;
  letter-spacing: -4px;
  color: ${props => props.color
          ? props.theme.colors.primary
          : props.theme.colors.black};
`
export const NumberCardSmallText = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 24px;
  padding-top: 12px;
  color: ${({ theme }) => theme.colors.black};
`