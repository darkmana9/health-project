import styled from 'styled-components'
import linesTop from '../../assets/images/lines-top.png'
import linesBottom from '../../assets/images/lines-bottom.png'
import { sizes } from '../../mediaQueries'

export const LinesWrapper = styled.div`
  position: ${props => props.isTop ? 'static' : 'absolute'};

`
export const LinesImage = styled.div`
  background-image: url(${props => props.isTop ? linesTop : linesBottom});
  width: 1305px;
  height: 442px;
  position: absolute;
  left: ${props => props.isTop ? 'auto' : 0};
  right: ${props => props.isTop ? 0 : 'auto'};
  top: ${props => props.isTop ? '60px' : 'auto'};
  bottom: ${props => props.isTop ? 'auto' : '40px'};
  background-repeat: no-repeat;
  z-index: -1;
  @media ${sizes.tablet} {
    display: none;
  }
`