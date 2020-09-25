import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../layouts/Layout"
import SEO from "../components/SEO"

const Markdown = styled.div`
  p {
    line-height: 1.5;
    font-size: 1.125rem;
  }

  code {
    font-family: "Space Mono", "Monospace";
    font-size: 1rem;
    padding: 0px 0.8rem;
    border-radius: 0.3em;
    white-space: normal;
    background: rgb(245, 245, 245);
    color: rgb(239, 71, 111);
  }

  h2 code {
    font-size: 1.5rem;
  }
`

class PageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      displayComments: false,
    }
  }

  render() {
    const {
      data: { markdownRemark: post },
    } = this.props

    return (
      <Layout>
        <SEO title={post.frontmatter.title} />
        <h1>{post.frontmatter.title}</h1>
        <Markdown
          /* eslint react/no-danger: 0 */
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date
        description
        path
        cover
      }
    }
  }
`
