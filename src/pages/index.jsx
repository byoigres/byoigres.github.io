import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import FullPageLayout from "../layouts/FullPageLayout"
import SEO from "../components/SEO"
import Navbar from "../components/NavBar"
import ExternalLink from "../components/ExternalLink"

const FullPageContainer = styled.div`
  width: 100%;
  height: 100%;
  background: url(https://i.redd.it/xob7iy25rez01.jpg) no-repeat center center
    fixed;
  background-size: cover;
  overflow: hidden;
  color: white;
  display: flex;
  justify-content: center;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 2;
  }
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 3;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
`

const Greetings = styled.div`
  text-align: center;
  margin: 20px;
`

const SubText = styled.p`
  margin: 0;
  text-transform: uppercase;
  font-family: "Zilla Slab", "Merriweather", serif;
  font-weight: 300;
  font-size: 1.5rem;
`

const Line = styled.hr`
  margin: 10px 0;
  background-color: white;
  height: 3px;
`

const Title = styled.h1`
  margin: 0;
  text-transform: uppercase;
  font-family: "Zilla Slab", "Merriweather", serif;
  font-size: 3.5rem;
`

const Links = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const LinkButton = styled(Link)`
  color: white;
  border: 2px solid white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px;
  font-size: 0.8rem;
  background-color: transparent;

  &:hover {
    color: black;
    background-color: white;
  }
`

const BackgroundCredits = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  z-index: 4;

  a {
    color: white;

    &:hover {
    }
  }
`

const IndexPage = () => (
  <FullPageLayout>
    <SEO title="Home" />
    <FullPageContainer>
      <Navbar isTransparent />
      <Page>
        <Content>
          <Greetings>
            <SubText>Hello, it's me</SubText>
            <Line />
            <Title>Sergio Flores</Title>
            <Line />
            <SubText>I build things for fun</SubText>
          </Greetings>
          <Links>
            <LinkButton to="/a-liitle-bit-about-me">About me</LinkButton>
            <LinkButton to="/contact-me">Projects</LinkButton>
          </Links>
        </Content>
      </Page>
      <BackgroundCredits>
        Background by{" "}
        <ExternalLink uri="https://www.reddit.com/user/cryptodesign/">
          u/cryptodesign
        </ExternalLink>{" "}
        from{" "}
        <ExternalLink uri="https://www.reddit.com/r/EarthPorn/comments/8l9xbl/milky_way_coming_out_of_an_erupting_volcano/">
          reddit
        </ExternalLink>
      </BackgroundCredits>
    </FullPageContainer>
  </FullPageLayout>
)

export default IndexPage
