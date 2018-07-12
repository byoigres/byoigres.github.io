import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import PageTitle from '../components/PageTitle';

const Post = styled.article`
  flex: 1 0 100%;
  justify-content: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: ${p => p.theme.contentMaxWidth};

  @media only screen and (max-width: 61.999rem) {
    max-width: 100%;
  }

  @media only screen and (max-width: 29.999rem) {
    max-width: 100%;

    p {
      font-size: 1rem;
      line-height: 1.8rem;
    }
  }
`;

const PostMeta = styled.section``;

const PostContent = styled.section``;

export default function Template({ data }) {
  const { markdownRemark: post } = data;

  return (
    <Fragment>
      <Helmet title={`${post.frontmatter.title} - Sergio Flores`} />
      <Post>
        <PostMeta>
          <PageTitle>{post.frontmatter.title}</PageTitle>
        </PostMeta>
        <PostContent
          /* eslint react/no-danger: 0 */
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Post>
    </Fragment>
  );
}

Template.propTypes = {
  data: PropTypes.shape({
    color: PropTypes.string,
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        disqusShortname: PropTypes.string,
      }),
    }),
    markdownRemark: PropTypes.shape({
      id: PropTypes.string,
      html: PropTypes.string,
      frontmatter: PropTypes.shape({
        date: PropTypes.string,
        path: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query PageByPath($path: String!) {
    site {
      siteMetadata {
        disqusShortname
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
