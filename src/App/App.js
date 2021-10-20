import React, { lazy, Suspense } from 'react'
import { Header } from '../components/Header/Header'
import { ThemeProvider } from 'styled-components'
import { lightTheme } from '../theme'
import { LayoutWrapper } from './components'
import Lines from '../components/Lines/Lines'
import { BrowserRouter, Redirect, Route } from 'react-router-dom'

const HomePage = lazy(() => import('../pages/Home/Home'))
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'))

export const App = () => {
  return (
    <BrowserRouter>
      <Redirect to="/home"/>
      <Suspense fallback={<h2>loading...</h2>}>
        <ThemeProvider theme={lightTheme}>
          <LayoutWrapper>
            <Lines isTop/>
            <Header/>
            <Route path="/home">
              <HomePage/>
            </Route>
            <Route path="/contacts">
              <ContactsPage/>
            </Route>
            <Lines isTop={false}/>
          </LayoutWrapper>
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  )
}