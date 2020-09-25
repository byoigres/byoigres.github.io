import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"

const data = {
  panels: {
    contact: {
      title: "contact info",
      color: "#ff0000",
      items: [
        {
          label: "email",
          value: "sergio@byoigr.es",
          link: "mailto:sergio@byoigr.es",
        },
        {
          label: "phone",
          value: "+52 6672 240 989",
          link: "tel:+52 6672 240 989",
        },
        {
          label: "homepage",
          value: "byoigr.es",
          link: "https://byoigr.es",
        },
        {
          label: "twitter",
          value: "@byoigres",
          link: "https://twitter.com/byoigres",
        },
        {
          label: "github",
          value: "byoigres",
          link: "https://github.com/byoigres",
        },
        {
          label: "stackoverflow",
          value: "/cv/byoigres",
          link: "https://stackoverflow.com/cv/byoigres",
        },
        {
          label: "blog",
          value: "roofox.dev",
          link: "https://roofox.dev",
        },
      ],
    },
    projects: {
      title: "selected projects",
      color: "#4a86e8",
      items: [],
    },
  },
}

const Container = styled.div`
  font-family: "Oxygen", sans-serif;
`

const Cover = styled.div`
  background-color: #555;
  color: #fff;
  padding: 4rem 0;
  text-align: center;

  @media print {
    padding: 3rem 0;
  }
`

const Title = styled.div`
  font-size: 7rem;

  @media print {
    font-size: 3rem;
  }
`

const FirstName = styled.span`
  &:after {
    content: " ";
  }
`

const LastName = styled.span`
  font-weight: bold;
`

const Subtitle = styled.div`
  font-size: 3rem;

  @media print {
    font-size: 2rem;
  }
`

const PanelTitle = styled.div`
  color: ${p => p.color};
  font-weight: bold;
  font-size: 2.5rem;

  @media print {
    font-size: 1.5rem;
  }
`

const Panel = styled.div`
  /*
  background-color: green;
  */
  display: flex;
  flex-direction: column;
`

const PanelItemKey = styled.span`
  color: #b7b7b7;
  font-size: 1.5rem;

  @media print {
    font-size: 1rem;
  }

  &:after {
    content: " ";
  }
`

const PanelItemContent = styled.span`
  color: #fff;

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: #000;
  }
`

const Page = ({ contact, projects }) => (
  <Container>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <Cover>
      <Title>
        <FirstName>sergio antonio</FirstName>
        <LastName>flores angulo</LastName>
      </Title>
      <Subtitle>fullstack developer</Subtitle>
    </Cover>
    <Panel key={contact.title}>
      <PanelTitle color={contact.color}>{contact.title}</PanelTitle>
      {contact.items.map(item => (
        <PanelItemKey key={`${contact.title}-${item.label}`}>
          {item.label}{" "}
          <PanelItemContent>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener nofollow">
                {item.value}
              </a>
            ) : (
              item.value
            )}
          </PanelItemContent>
        </PanelItemKey>
      ))}
    </Panel>
    <Panel key={projects.title}>
      <PanelTitle color={projects.color}>{projects.title}</PanelTitle>
    </Panel>
  </Container>
)

const Render = () => (
  <Page contact={data.panels.contact} projects={data.panels.projects} />
)

export default Render
