import styled from 'styled-components'
import notification from '../../assets/icons/notification.svg'
import burger from '../../assets/icons/burger-menu.png'
import { sizes } from '../../mediaQueries'

export const HeaderWrapper = styled.header`
  display: flex;
  flex-wrap: wrap;
  line-height: 54px;
  align-items: center;
  font-style: normal;
  font-weight: bold;

  a {
    text-decoration: none;
  }

  @media screen and ${sizes.tablet} {
    justify-content: space-between;
  }
`
export const HeaderLogo = styled.div`
  display: flex;
  font-style: normal;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  min-width: fit-content;
  padding-right: 50px;
  padding-left: 10px;
  margin-right: 14%;
  @media screen and ${sizes.tablet} {
    padding-left: 16px;
  }
`

export const HeaderMenuLinksWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 442px;
  align-items: center;
  margin-right: 10%;
  padding-right: 6px;

  a {
    color: ${({ theme }) => theme.colors.menuText};
    position: relative;

    &.active {
      color: ${({ theme }) => theme.colors.primary};

      &::after {
        content: '●';
        color: ${({ theme }) => theme.colors.primary3};
        position: absolute;
        top: 22px;
        right: 40%;
      }
    }

    &:hover {
      text-decoration: none;

      &::after {
        content: '●';
        position: absolute;
        top: 22px;
        right: 40%;
      }
    }
  }

  @media screen and ${sizes.tablet} {
    display: none;
  }
`

export const HeaderMenuAuthorizationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 230px;
  padding-right: 8%;
  @media screen and ${sizes.tablet} {
    display: none;
  }
`

export const HeaderLogIn = styled.a`
  min-width: fit-content;
  padding-right: 17%;
  color: ${({ theme }) => theme.colors.menuText};
`
export const Notification = styled.div`
  background-image: url(${notification});
  width: 24px;
  height: 20px;
  @media screen and ${sizes.tablet} {
    display: none;
  }
`
export const BurgerMenu = styled.div`
  display: none;
  @media screen and ${sizes.tablet} {
    background-image: url(${burger});
    display: block;
    cursor: pointer;
    width: 32px;
    height: 32px;
    padding-right: 17px;
    background-repeat: no-repeat;
  }

`

