import { ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header/Header"
import theme from "./constants/theme"
import Router from './router/Router'
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
