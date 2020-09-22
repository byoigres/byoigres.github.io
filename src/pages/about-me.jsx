import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/Layout"
import SEO from "../components/SEO"

const SecondPage = () => (
  <Layout>
    <SEO title="About me" />
    <h1>A liitle bit about me</h1>
    <p>
      Hello, my name is Sergio, I'm a Software Developer from Mexico with 10
      years of expertise working with different programming languages.
    </p>
    <h2>What are my development skills?</h2>
    <p>
      These last two years I been working in depth with node.js building backend
      services (API's and server-side services)
    </p>
    <ul>
      <li>Javascript</li>
    </ul>
  </Layout>
)

export default SecondPage
