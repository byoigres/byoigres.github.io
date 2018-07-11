import styled from 'styled-components';
import Link from 'gatsby-link';

const MarkdownLink = styled(Link)`
  a:visited {
    color: ${p => p.theme.primaryColor1};
  }

  a:not(.gatsby-resp-image-link) {
    padding-bottom: 3px;
    border-bottom: 0.2rem solid ${p => p.theme.primaryColor1};
    color: ${p => p.theme.primaryColor1};
    font-weight: 700;
    text-decoration: none;

    &:hover {
      border-bottom-color: ${p => p.theme.primaryColor2};
      border-bottom-style: dashed;
      color: ${p => p.theme.primaryColor2};
    }

    transition: all 3s;
  }
`;

export default MarkdownLink;
