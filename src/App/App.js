import { Header } from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../theme'
import { LayoutWrapper, MainWrapper } from './components'
import Home from '../pages/Home/Home'
import Lines from '../components/Lines/Lines'
import { BrowserRouter, Route } from 'react-router-dom'

export const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <LayoutWrapper>
          <Lines isTop/>
          <Header/>
          <MainWrapper>
            <Route path="/">
              <Home/>
            </Route>
          </MainWrapper>
          <Lines isTop={false}/>
        </LayoutWrapper>
      </ThemeProvider>
    </BrowserRouter>
  )
}