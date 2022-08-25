import React from 'react'
import Header from '../sections/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout