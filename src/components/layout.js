/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import wallpaper from "../images/hill.svg"

import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '1rem' }}>
        <div className="container">
          <h1 className="title">Under Construction</h1>
        </div>
      </section>
      <main className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          {children}
        </div>
      </main>
      <div className="wallpaper-container">
        <div className="wallpaper">
          <div>
            <img className="wallpaper-image" src={wallpaper} />
          </div>
        </div>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
