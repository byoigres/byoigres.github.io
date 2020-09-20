import React from "react"
import Link from "gatsby-link"
import styled from "styled-components"

const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  height: ${p => p.theme.navbar.height};
  max-height: ${p => p.theme.navbar.height};
  background-color: transparent;
  opacity: 0.9;

  /* media-query */
  position: fixed;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Nav = styled.nav`
  color: white;
  max-width: ${p => (p.isFullWidth ? "inherit" : p.theme.breakpoints.xl)};
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  height: ${p => p.theme.navbar.height};
  padding: 0.5rem;

  @media only screen and (max-width: 29.999rem) {
    margin: 1rem;
  }
`

const HeaderItem = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`

const HeaderLink = styled(Link)`
  font-weight: 700;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.3rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom-color: white;
  }

  @media only screen and (max-width: 29.999rem) {
    font-size: 1rem;
  }

  &:visited {
    color: white;
  }
`

const HeaderItemLogo = styled.h1`
  margin: 0 auto 0 0;
  border: 4px solid white;
  display: flex;
  align-items: center;
`

const HeaderLinkLogo = styled(HeaderLink)`
  font-weight: 700;
  font-size: 1.4rem;
  font-family: "Zilla Slab";
  width: 4rem;

  &:hover {
    border-bottom-color: transparent;
  }
`

const NavBar = ({ isFullWidth }) => (
  <Header>
    <Nav isFullWidth={isFullWidth}>
      <HeaderItemLogo>
        <HeaderLinkLogo to="/">SF</HeaderLinkLogo>
      </HeaderItemLogo>
      <HeaderItem>
        <HeaderLink to="/about-me/">About me</HeaderLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderLink to="/contacto/">Contact me</HeaderLink>
      </HeaderItem>
    </Nav>
  </Header>
)

export default NavBar
