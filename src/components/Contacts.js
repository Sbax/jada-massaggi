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

const ContactsContainer = styled.section`
  display: flex;
  flex-direction: column;

  > * {
    flex: 1;
  }

  > * + * {
    margin-top: 1rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;

    > * + * {
      margin-top: 0;
    }
  }
`;

const IconUrl = styled.a`
  font-size: 2rem;
`;

const Contact = styled.article`
  display: flex;
  flex-direction: column;

  align-items: center;
  line-height: 1.4;

  @media (min-width: 1024px) {
    width: 80%;
  }

  > hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
    border-top: 1px solid currentColor;
    opacity: 0.25;

    width: 90%;
  }

  > a {
    text-decoration: none;
  }

  > p {
    opacity: 0.65;
    text-align: center;
  }
`;

const Contacts = ({
  facebookUrl,
  facebookName,
  facebookDescription,
  phone,
  phoneDescription,
}) => {
  const phoneUrl = `tel:${phone.split(' ').join('-')}`;

  return (
    <Container>
      <h1>Contatti</h1>

      <ContactsContainer>
        <Contact>
          <IconUrl href={facebookUrl}>
            <FontAwesomeIcon icon={['fab', 'facebook']} />
          </IconUrl>

          <hr />

          <a href={facebookUrl}>
            <b>{facebookName}</b>
          </a>
          <p>{facebookDescription}</p>
        </Contact>
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
          <p>{phoneDescription}</p>
        </Contact>
      </ContactsContainer>
    </Container>
  );
};

export default Contacts;
