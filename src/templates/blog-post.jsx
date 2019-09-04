import React from "react"
import { graphql } from "gatsby"

class BlogPostTemplate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayComments: false,
        };
    }

    render() {
        const {
            data: {
                markdownRemark: post,
            },
        } = this.props


        return (
            <React.Fragment>
                <span>{post.frontmatter.date}</span>
                <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </React.Fragment>
        )
    }
}

export default BlogPostTemplate

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
      }
    }
  }
`
