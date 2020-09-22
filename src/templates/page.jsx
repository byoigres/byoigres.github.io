import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/Layout"
import SEO from "../components/SEO"

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
        <div
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
