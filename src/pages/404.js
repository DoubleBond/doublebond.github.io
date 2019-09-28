import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <p>Sorry! Page not found... You just hit a route that doesn&#39;t exist... the sadness. Go back <Link to="/">home</Link>.</p>
  </Layout>
)

export default NotFoundPage
