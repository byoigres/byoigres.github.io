import React from "react"
import PropTypes from "prop-types"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../components/GlobalStyle"
import theme from "../utils/theme"

const Content = styled.div`
  width: 100%;
  height: 100%;
`

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle type="fullpage" />
    <Content>{children}</Content>
  </ThemeProvider>
)

MainLayout.propTypes = {
  children: PropTypes.array.isRequired,
}

export default MainLayout
