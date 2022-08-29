import { Header } from '../sections/index'

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      {children}
    </>
  )
}

export default Layout