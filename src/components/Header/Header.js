import { ReactComponent as Wind } from '../../assets/icons/wind.svg'
import {
  BurgerMenu,
  HeaderLogIn,
  HeaderLogo,
  HeaderMenuAuthorizationWrapper,
  HeaderMenuLinksWrapper,
  HeaderWrapper,
  Notification,
} from './components'
import PrimaryButton from '../Button/PrimaryButton'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderLogo>
        <Wind/>
        Modsen Health
      </HeaderLogo>
      <HeaderMenuLinksWrapper>
        <NavLink to="/1">
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
        <NavLink to="/5">
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
}