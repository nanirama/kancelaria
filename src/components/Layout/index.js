import * as React from "react"
import PropTypes from "prop-types"

import Header from "../Header/index"
import Footer from "../Footer/index"
// import "./layout.css"
import "../../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
