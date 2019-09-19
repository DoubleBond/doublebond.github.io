/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `8rem 1.0875rem 1.45rem`,
        }}
      >
        <h1 className="title">Under Construction</h1>
        <main>{children}</main>
        {/* <footer>
          © {new Date().getFullYear()}, Built with love
          {` `}
          <a href="https://github.com/ghiobi/me">Laurendy Lam</a>
        </footer> */}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
