import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { DiscussionEmbed } from 'disqus-react';
import Waypoint from 'react-waypoint';
import styled from 'styled-components';
import DateTime from '../components/DateTime';
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

const PostTitle = styled(PageTitle)``;

const PostContent = styled.section``;
const PostComments = styled.section``;
const LoadingComments = styled.div`
  &::before {
    content: 'Cargando comentarios...';
  }
`;

export default class Template extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayComments: false,
    };
  }

  render() {
    const {
      markdownRemark: post,
      site: { siteMetadata: { disqusShortname } },
    } = this.props.data;

    const disqusConfig = {
      identifier: post.id,
      title: post.frontmatter.title,
    };

    return (
      <Fragment>
        <Helmet title={`${post.frontmatter.title} - Sergio Flores`} />
        <Post>
          <PostMeta>
            <PostTitle>{post.frontmatter.title}</PostTitle>
            <DateTime format="MMMM D, YYYY">{post.frontmatter.date}</DateTime>
          </PostMeta>
          <PostContent
            /* eslint react/no-danger: 0 */
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <PostComments>
            <Waypoint
              onEnter={() => {
                this.setState({ displayComments: true });
              }}
            >
              {this.state.displayComments ? (
                <DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              ) : (
                <LoadingComments />
              )}
            </Waypoint>
          </PostComments>
        </Post>
      </Fragment>
    );
  }
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
  query BlogPostByPath($path: String!) {
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
