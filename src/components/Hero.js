import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from "gatsby"
// import { FaLinkedinIn, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa/';
import * as FA from 'react-icons/fa/';

const HeroBlock = styled.header`
    background-color: #01579B;
    background: url(${props => props.background}) #01579B no-repeat center center fixed;
    background-size: cover;
    min-height: 500px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: ${window.innerHeight}px;
    width: 100%;
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

const Hero = ({ title, backgroundImage, contact }) => {
    
    return (
        <HeroBlock background={backgroundImage}>
            <Container>
                <Header>{title}</Header>
                <Position>Web Developer</Position>
                <Carrear>Informatics</Carrear>
                <Social>
                    {
                        Object.keys(contact).map(key => {
                            const Icon = FA[contact[key].icon];
                            return (
                                <a href="https://www.linkedin.com/in/byoigres" target="_blank" rel="noopener noreferrer">
                                    <Icon />
                                </a>
                            )
                        })
                    }
                </Social>
            </Container>
        </HeroBlock>
    );
};

const query = graphql`
    query {
        site {
            siteMetadata {
                title
                contact {
                    twitter {
                        icon
                        link
                    }
                    linkedin {
                        icon
                        link
                    }
                    github {
                        icon
                        link
                    }
                    email {
                        icon
                        link
                    }
                }
            }
        }
        backgroundImage: file(relativePath: { regex: "/background.jpg/" }) {
            childImageSharp {
                resize(width: 1280, height: 720) {
                    src
                }
            }
        }
    }
`

export default () => (
    <StaticQuery
        query={query}
        render={data => {
            const {
                site: {
                    siteMetadata: {
                        title,
                        contact
                    }
                },
                backgroundImage: {
                    childImageSharp: {
                        resize: {
                            src: backgroundImage
                        }
                    }
                }
            } = data;

            const props = {
                title,
                backgroundImage,
                contact
            };
            // backgroundImage.childImageSharp.resize.src
            return (
                <Hero { ...props } />
            );
        }}
    />
);