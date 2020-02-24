import React, { Fragment } from "react"
import { createGlobalStyle } from 'styled-components';
import Hero from '../components/Hero';

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Libre Baskerville';
    }
    html, body {
        font-family: 'Libre Baskerville';
        margin: 0;
        padding: 0;
    }
`;

const LandingPage = () => (
    <Fragment>
        <Hero title="Sergio Flores" />
        <GlobalStyle />
    </Fragment>
)

export default LandingPage
