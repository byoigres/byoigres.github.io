import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import styled from 'styled-components';
import 'prismjs/themes/prism-coy.css';
import DateTime from '../components/DateTime';
import PageTitle from '../components/PageTitle';

const Post = styled.section`
  flex: 1 0 100%;
  margin: 1rem 0;
  font-size: 1.4375rem;
  background-color: white;

  @media only screen and (max-width: 29.999rem) {
    > a {
      font-size: 1rem;
    }
  }
`;

const PostTitle = styled(Link)``;

const IndexPage = ({ data: { allMarkdownRemark: { edges: posts } } }) => (
  <article>
    <PageTitle>Últimas publicaciones</PageTitle>
    {posts.map(post => (
      <Post key={post.node.frontmatter.path}>
        <DateTime format="MMMM D, YYYY">{post.node.frontmatter.date}</DateTime>
        <PostTitle to={post.node.frontmatter.path}>
          {post.node.frontmatter.title}
        </PostTitle>
      </Post>
    ))}
  </article>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      filter: { frontmatter: { layout: { eq: "post" }, draft: { ne: true } } }
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___layout] }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            category
            description
            path
          }
        }
      }
    }
  }
`;
