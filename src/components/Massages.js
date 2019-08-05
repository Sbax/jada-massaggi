import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.5;
  }
`;

const Services = styled.section`
  display: flex;
  justify-content: center;

  margin: 3rem;

  > * + * {
    margin-left: 4rem;
  }
`;

const Service = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    width: 10rem;
    height: 10rem;

    border-radius: 70% 50% / 70% 60%;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.22),
      0 1px 8px 2px rgba(0, 0, 0, 0.22);
    opacity: 0.75;
  }

  span {
    opacity: 0.65;

    font-size: 1.2rem;
  }

  > * + * {
    margin-top: 1.5rem;
  }
`;

const Massages = ({ title, body }) => {
  return (
    <Container>
      <h1>{title}</h1>
      <p dangerouslySetInnerHTML={{ __html: body }} />
      <Services>
        <Service>
          <img src="/essential.jpg" />
          <span>Oli Essenziali</span>
        </Service>
        <Service>
          <img src="/ayurveda.jpg" />
          <span>Ayurveda</span>
        </Service>
        <Service>
          <img src="/sunset.jpg" />
          <span>Linfodrenaggio</span>
        </Service>
        <Service>
          <img src="/hot-stones.jpg" />
          <span>Hot Stones</span>
        </Service>
      </Services>
    </Container>
  );
};

export default Massages;
