import { Header } from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../theme'
import { LayoutWrapper } from './components'
import Home from '../pages/Home/Home'
import Lines from '../components/Lines/Lines'
import { BrowserRouter, Route } from 'react-router-dom'
import Contacts from '../pages/Contacts/Contacts'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <LayoutWrapper>
          <Lines isTop/>
          <Header/>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/contacts">
              <Contacts/>
            </Route>
          <Lines isTop={false}/>
        </LayoutWrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
}