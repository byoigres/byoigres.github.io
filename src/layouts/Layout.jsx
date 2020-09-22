import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../components/GlobalStyle"
import theme from "../utils/theme"
import Navbar from "../components/NavBar"

const Page = styled.div`
  margin-top: ${p => p.theme.navbar.height};
  /*
  background-color: red;
  */
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  /*
  background-color: blue;
  */
  width: 100%;
  max-width: ${p => p.theme.breakpoints.lg};
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle type="fullpage" />
    <Navbar />
    <Page>
      <Content>{children}</Content>
    </Page>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default MainLayout
