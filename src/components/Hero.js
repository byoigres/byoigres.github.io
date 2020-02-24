import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope  } from 'react-icons/fa/';
import background from '../images/background.jpg';

const HeroBlock = styled.header`
    background-color: #01579B;
    background-image: url(${background});
    min-height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    position: fixed;
`;

const Container = styled.hgroup`
    flex: 1;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.6);
    max-width: 700px;
    padding: 20px;
`;

const Header = styled.h1`
    font-family: 'Open Sans';
    font-weight: bold;
    font-size: 80px;
    color: white;
    margin: 0;
`;

const Position = styled.h2`
    color: white;
`;

const Carrear = styled.h3`
    color: white;
`;

const Social = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    max-width: 250px;
    > a,
    > a:visited,
    > a:active,
    > a:hover,
    > a:focus {
        color: white;
    }
    > a > svg {
        height: 35px;
        width: 35px;
    }
`;

const Hero = ({title}) => (
    <HeroBlock>
        <Container>
            <Header>{title}</Header>
            {/* <h1>{title}</h1> */}
            <Position>Web Developer</Position>
            <Carrear>Informatics</Carrear>
            <Social>
                <a href="https://www.linkedin.com/in/byoigres" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn />
                </a>
                <a href="https://www.twitter.com/byoigres" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.github.com/byoigres" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="mailto:sergio@byoigr.es" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </a>
            </Social>
        </Container>
    </HeroBlock>
);

export default Hero;
