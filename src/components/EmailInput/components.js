import styled from 'styled-components'
import { sizes } from '../../mediaQueries'
import mail from '../../assets/icons/mail.svg'

export const Email = styled.form`
  position: relative;

  input {
    width: 90%;
    box-sizing: border-box;
    border: 0;
    border-radius: 40px;
    height: 68px;
    padding-left: 65px;
    z-index: 100;
    font-style: normal;
    font-weight: normal;
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: 19px;
    box-shadow: 0 100px 80px rgba(0, 0, 0, 0.07), 0 64.8148px 46.8519px rgba(0, 0, 0, 0.0531481), 0 38.5185px 25.4815px rgba(0, 0, 0, 0.0425185), 0 20px 13px rgba(0, 0, 0, 0.035), 0 8.14815px 6.51852px rgba(0, 0, 0, 0.0274815), 0 1.85185px 3.14815px rgba(0, 0, 0, 0.0168519);
    @media screen and ${sizes.tablet} {
      width: 95%;
      box-shadow: none;
    }

    &::placeholder {
      position: relative;
      opacity: 0.2;
    }
  }

  button {
    margin-left: -190px;
    width: 180px;
    font-style: normal;
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSizes[1]}px;
    line-height: 19px;

    a {
      text-decoration: none;
    }

    @media screen and ${sizes.phone} {
      margin-left: -125px;
      width: 110px;
    }
    @media screen and ${sizes.desktop} {
      margin-left: -137px;
      width: 125px;
    }
  }
`
export const Mail = styled.div`
  background-image: url(${mail});
  left: 32px;
  position: absolute;
  top: 25px;
  opacity: 0.2;
  width: 21px;
  height: 16px;
`