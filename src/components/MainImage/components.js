import styled from 'styled-components'
import img from '../../assets/images/men.png'
import imgRetina from '../../assets/images/men-retina.png'
import { sizes } from '../../mediaQueries'

export const Image = styled.div`
  background-image: -webkit-image-set(url(${img}) 1x, url(${imgRetina}) 2x);
  width: 934px;
  height: 995px;
  background-size: auto;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 14px;
  image-rendering: pixelated;
  @media screen and ${sizes.tablet} {
    width: 100%;
    height: 889px;
    background-position: top;
    background-repeat: no-repeat;
    margin-top: 58px;
  }
`