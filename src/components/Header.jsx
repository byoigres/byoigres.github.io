import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  min-height: 100px;
`;

const HeaderTitle = styled.h1`
  margin: 0;
`;

const HeaderLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderTitle>
      <HeaderLink to="/">Sergio Flores</HeaderLink>
    </HeaderTitle>
  </HeaderWrapper>
);

export default Header;
