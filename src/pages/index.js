import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Contact from "../components/contact"
import Experience from "../components/experience"
import Landing from "../components/landing"
import Projects from "../components/projects"
import Journal from "../components/journal"
import "../styles/layout.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="All posts" />
        <Landing />
        <About />
        <Experience />
        <Projects />
        <Journal />
        <Contact />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
