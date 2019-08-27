import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';
import { Reset } from 'styled-reset';
import GlobalStyle from '../components/GlobalStyle';
import Main from '../components/Main';
import '../icons';

const Index = props => {
  const data = Object.entries(props.data).reduce((aggregated, [key, entry]) => {
    const data = !!entry.nodes
      ? { ...entry.nodes[0].childDataJson }
      : { ...entry };

    return {
      ...aggregated,
      [key]: data,
    };
  }, {});

  const { siteMetadata } = data.site;

  const siteTitle = siteMetadata.title;
  const siteDescription = siteMetadata.siteDescription;

  return (
    <React.Fragment>
      <Helmet
        htmlAttributes={{ lang: 'it' }}
        meta={[{ name: 'description', content: siteDescription }]}
        title={siteTitle}
      />
      <Reset />
      <GlobalStyle />
      <Main data={data} />
    </React.Fragment>
  );
};

export default Index;

export const pageQuery = graphql`
  {
    site: site {
      siteMetadata {
        title
        description
      }
    }
    bio: allFile(filter: { name: { eq: "bio" } }) {
      nodes {
        childDataJson {
          name
          bio
          profilePic
          subtitle
        }
      }
    }
    quote: allFile(filter: { name: { eq: "quote" } }) {
      nodes {
        childDataJson {
          quote
          author
        }
      }
    }
    massages: allFile(filter: { name: { eq: "massages" } }) {
      nodes {
        childDataJson {
          title
          body
        }
      }
    }
    services: allFile(filter: { name: { eq: "services" } }) {
      nodes {
        childDataJson {
          services {
            title
            description
          }
        }
      }
    }
    gallery: allFile(filter: { name: { eq: "gallery" } }) {
      nodes {
        childDataJson {
          gallery
        }
      }
    }
    contacts: allFile(filter: { name: { eq: "contacts" } }) {
      nodes {
        childDataJson {
          facebookUrl
          facebookName
          facebookDescription
          phone
          phoneDescription
          address
        }
      }
    }
  }
`;
