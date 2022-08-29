import { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles } from "../ThemeConfig"
import useDarkMode from 'use-dark-mode'
import Layout from '../components/layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [isMounted, setIsMounted] = useState(false)
  const darkmode = useDarkMode(true)
  const theme = darkmode.value ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])



  return(
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <GlobalStyles />
          <button onClick={darkmode.toggle}>Switch Mode</button>
          <button onClick={darkmode.enable}>Dark Mode</button>
          <button onClick={darkmode.disable}>Light Mode</button>
          {isMounted && <Component {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </>
  ) 
}

export default MyApp
