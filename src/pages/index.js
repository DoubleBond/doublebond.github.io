import React from "react"
import { navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Laurendy Lam" />
    <p style={{ paddingBottom: '1rem' }}>
      Hi! I'm Laurendy, I have taken down my website and I'm building a new one! For now you
      can visit my{" "}
      <a href="https://www.linkedin.com/in/lamlaurendy/">Linkedin</a> or{" "}
      <a href="https://github.com/ghiobi">Github</a>.
    </p>
    <p><a class="resume" href="Resume_Laurendy_Lam.pdf">View Resume</a></p>
  </Layout>
)

export default IndexPage
