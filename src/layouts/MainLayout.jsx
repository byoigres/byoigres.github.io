import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { ThemeProvider } from 'styled-components';
import NavBar from '../components/NavBar';
import theme from '../theme';
import InjectGlobalWithTheme from '../components/InjectGlobalWithTheme';

const PageContent = styled.main`
  padding: 0 ${p => p.theme.sidePadding};
  overflow: hidden;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Fragment>
      <Helmet
        title="Sergio Flores"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <InjectGlobalWithTheme>
        <Fragment>
          <NavBar />
          <PageContent className="page-content">{children()}</PageContent>
        </Fragment>
      </InjectGlobalWithTheme>
    </Fragment>
  </ThemeProvider>
);

MainLayout.propTypes = {
  children: PropTypes.func.isRequired,
};

export default MainLayout;
