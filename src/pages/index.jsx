import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import FullPageLayout from "../layouts/FullPageLayout"
import SEO from "../components/SEO"
import Navbar from "../components/NavBar"

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
`

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  padding: 5px 10px;
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
      <Navbar />
      <Page>
        <Content>
          <Greetings>
            <SubText>Hello, it's me</SubText>
            <Line />
            <Title>Sergio Flores</Title>
            <Line />
            <SubText>I am a Software/Web Developer</SubText>
          </Greetings>
          <Links>
            <LinkButton to="/about-me">About me</LinkButton>
            <LinkButton to="/contact-me">Projects</LinkButton>
          </Links>
        </Content>
      </Page>
      <BackgroundCredits>
        Background by{" "}
        <a href="https://www.reddit.com/user/cryptodesign/">u/cryptodesign</a>{" "}
        from{" "}
        <a href="https://www.reddit.com/r/EarthPorn/comments/8l9xbl/milky_way_coming_out_of_an_erupting_volcano/">
          reddit
        </a>
      </BackgroundCredits>
    </FullPageContainer>
  </FullPageLayout>
)

export default IndexPage
