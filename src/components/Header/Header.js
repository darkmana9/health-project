import { NavLink } from 'react-router-dom'

import { ReactComponent as Wind } from '../../assets/icons/wind.svg'
import { PrimaryButton } from '../Button'
import {
  BurgerMenu,
  HeaderLogIn,
  HeaderLogo,
  HeaderMenuAuthorizationWrapper,
  HeaderMenuLinksWrapper,
  HeaderWrapper,
  Notification,
} from './components'

export const Header = () => (
  <HeaderWrapper>
    <HeaderLogo>
      <Wind/>
      Modsen Health
    </HeaderLogo>
    <HeaderMenuLinksWrapper>
      <NavLink to="/home">
        Home
      </NavLink>
      <NavLink to="/2">
        Services
      </NavLink>
      <NavLink to="/3">
        Clinic
      </NavLink>
      <NavLink to="/4">
        Doctors
      </NavLink>
      <NavLink to="contacts">
        Contact
      </NavLink>
    </HeaderMenuLinksWrapper>
    <HeaderMenuAuthorizationWrapper>
      <HeaderLogIn href="/">
        Log In
      </HeaderLogIn>
      <PrimaryButton>
        Register
      </PrimaryButton>
    </HeaderMenuAuthorizationWrapper>
    <Notification/>
    <BurgerMenu/>
  </HeaderWrapper>
)
