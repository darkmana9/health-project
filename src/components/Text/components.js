import styled from 'styled-components'
import { sizes } from '../../mediaQueries'

export const TextWrapper = styled.p`
  font-style: normal;
`

export const TextXLarge = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[5]}px;
  line-height: 101.8%;
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and ${sizes.desktop} {
    font-size: ${({ theme }) => theme.fontSizes[4]}px;
  }
  @media screen and ${sizes.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[5]}px;
  }
  @media screen and ${sizes.phone} {
    font-size: ${({ theme }) => theme.fontSizes[3]}px;
  }
`
export const TextMedium = styled.p`
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  line-height: 30px;
  opacity: 0.7;
  width: 91%;
  color: ${({ theme }) => theme.colors.primary};
  @media screen and ${sizes.desktop} {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
  }
  @media screen and ${sizes.tablet} {
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    width: 100%;
  }
`
export const TextXSmall = styled.p`
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primary};
`