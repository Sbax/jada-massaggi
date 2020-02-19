import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 0 2rem;
  margin-bottom: 3rem;

  h1 {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const SocialContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  width: 100%;
  justify-content: center;
  align-items: center;

  > * + * {
    margin-top: 1rem;

    @media (min-width: 1024px) {
      margin-top: 0;
    }
  }
`;

const ContactsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    flex: 1;
  }

  > * + * {
    margin-top: 1rem;
  }

  & + * {
    margin-top: 1rem;
  }
`;

const IconUrl = styled.a`font-size: 2rem;`;

const Contact = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  align-items: center;
  line-height: 1.4;

  > hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 1px solid currentColor;
    opacity: 0.25;
    width: 100%;
  }

  > a {
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    width: 80%;

    > hr {
      width: 60%;
    }
  }
`;

const ContactDesciption = styled.p`
  opacity: 0.65;
  text-align: center;

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

const Times = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  white-space: pre-wrap;
  line-height: 1.3;
`;

const Contacts = ({
  facebookUrl,
  facebookName,
  instagramUrl,
  instagramName,
  facebookDescription,
  phone,
  phoneDescription,
  times
}) => {
  const phoneUrl = `tel:${phone.split(' ').join('-')}`;

  return (
    <Container>
      <h1>Contatti</h1>

      <ContactsContainer>
        <SocialContainer>
          <Contact>
            <IconUrl href={facebookUrl}>
              <FontAwesomeIcon icon={[ 'fab', 'facebook' ]} />
            </IconUrl>

            <hr />
            <a href={facebookUrl}>
              <b>{facebookName}</b>
            </a>
          </Contact>

          <Contact>
            <IconUrl href={facebookUrl}>
              <span className="fa-layers fa-fw">
                <FontAwesomeIcon icon="circle" />
                <FontAwesomeIcon icon={[ 'fab', 'instagram' ]} inverse transform="shrink-6" />
              </span>
            </IconUrl>

            <hr />
            <a href={instagramUrl}>
              <b>{instagramName}</b>
            </a>
          </Contact>
        </SocialContainer>
        <ContactDesciption>{facebookDescription}</ContactDesciption>
      </ContactsContainer>
      <ContactsContainer>
        <Contact>
          <IconUrl href={phoneUrl}>
            <span className="fa-layers fa-fw">
              <FontAwesomeIcon icon="circle" />
              <FontAwesomeIcon icon="phone" inverse transform="shrink-6" />
            </span>
          </IconUrl>

          <hr />

          <a href={phoneUrl}>
            <b>{phone}</b>
          </a>
          <ContactDesciption>{phoneDescription}</ContactDesciption>
        </Contact>
      </ContactsContainer>

      <h1>Orari</h1>
      <Times>{times}</Times>
    </Container>
  );
};

export default Contacts;
