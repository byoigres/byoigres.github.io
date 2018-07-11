import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const Header = styled.header`
  top: 0;
  left: 0;
  right: 0;
  color: #fff;
  height: 5rem;
  max-height: 5rem;
  background-color: white;
  opacity: 0.9;

  /* media-query */
  position: fixed;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const Nav = styled.nav`
  color: #000;
  max-width: ${p => p.theme.contentMaxWidth};
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  height: 5rem;
  padding: 0.5rem;

  @media only screen and (max-width: 29.999rem) {
    margin: 1rem;
  }
`;

const HeaderItem = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  font-weight: 700;
  color: #000;
  text-decoration: none;
  font-size: 1.3rem;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &:hover {
    border-bottom-color: #000;
  }

  @media only screen and (max-width: 29.999rem) {
    font-size: 1rem;
  }

  &:visited {
    color: #000;
  }
`;

const HeaderItemLogo = styled.h1`
  margin: 0 auto 0 0;
  border: 6px solid black;
  display: flex;
  align-items: center;
}
`;

const HeaderLinkLogo = styled(HeaderLink)`
  font-weight: 700;
  font-size: 1.8rem;
  width: 6rem;

  &:hover {
    border-bottom-color: transparent;
  }
}
`;

const NavBar2 = () => (
  <Header>
    <Nav>
      <HeaderItemLogo>
        <HeaderLinkLogo to="/">SF</HeaderLinkLogo>
      </HeaderItemLogo>
      <HeaderItem>
        <HeaderLink to="/acerca-de-mi/">Acerca de mi</HeaderLink>
      </HeaderItem>
      <HeaderItem>
        <HeaderLink to="/contacto/">Contacto</HeaderLink>
      </HeaderItem>
    </Nav>
  </Header>
);

export default NavBar2;
