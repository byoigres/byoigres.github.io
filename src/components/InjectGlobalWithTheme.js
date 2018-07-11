import { Children } from 'react';
import { withTheme, injectGlobal } from 'styled-components';

const InjectGlobalWithTheme = ({ theme, children }) => {
  /* eslint no-unused-expressions: 0 */
  injectGlobal`
    /* Webfonts */
    @import url('https://fonts.googleapis.com/css?family=Oswald:400,700|Raleway:400,700');


    /* HTML Tags */
    * {
      box-sizing: border-box;
    }

    html {
      font-size: 16px;
    }

    body {
      margin: 0;
      background-color: #fff;
      font-family: ${theme.bodyFontFamily};
    }

    p {
      font-size: 1.4375rem;
      line-height: 2.5875rem;
      text-align: justify;
    }

    blockquote:not(.twitter-tweet) {
      border-left: 1rem solid ${theme.primaryColor1};
      margin: 0;
      padding: 0 0 0 0.5rem;
      position: relative;
    }

    a:visited {
      color: ${theme.primaryColor1};
    }

    .page-content a:not(.gatsby-resp-image-link) {
      color: ${theme.primaryColor1};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.primaryColor1};
      padding-bottom: 0px;
      font-weight: 700;

      &:hover {
        border-bottom-color: ${theme.primaryColor2};
        border-bottom-style: dashed;
        color: ${theme.primaryColor2};
      }
    }

    h1, h2 {
      font-family: ${theme.headerFontFamily};
      line-height: 2.5rem;

      & a {
        text-decoration: none;
      }
    }

    img {
      width: 100%;
      border: 0.2rem solid ${theme.primaryColor1}

      &:hover {
        opacity: 0.9;
      }
    }

    pre[class*="language-"]>code {
      border-left: none!important;
      box-shadow: none!important;
    }

    code[class=language-text] {
      font-family: monospace!important;
      background-color: ${theme.greyColor2}!important;
      border: 0.0625rem solid ${theme.greyColor3}!important;
      border-radius: 0.1875rem!important;
      color: ${theme.primaryColor1}!important;
      font-size: 1rem!important;
      padding: 0.125rem 0.25rem!important;
      white-space: nowrap!important;
      font-weight: 700;

      @media only screen and (max-width: 29.999rem) {
        font-size: 0.75rem!important;
      }
    }

    figure {
        margin: 0;
    }

    .gatsby-highlight {
      white-space: pre;
      margin: 0rem;
      display: block;

      &:before {
        content: attr(data-language)!important;
        display: block!important;
        background-color: ${theme.primaryColor1}!important;
        color: #ffffff!important;
        margin: 0rem 0rem -3rem!important;
        padding: 0.7rem!important;
        text-align: center!important;
      }
    }
  `;
  return Children.only(children);
};

export default withTheme(InjectGlobalWithTheme);
