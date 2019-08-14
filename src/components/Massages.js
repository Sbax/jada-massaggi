import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  padding: 0 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  p {
    line-height: 1.5;
  }
`;

const Services = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin: 2rem 0;

  @media (min-width: 1024px) {
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const Service = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 10rem;
    max-width: 35vw;
    height: 100%;

    img {
      width: 100%;
      height: 100%;

      border-radius: 70% 50% / 70% 60%;
      box-shadow: 0 10px 15px rgba(0, 0, 0, 0.22),
        0 1px 8px 2px rgba(0, 0, 0, 0.22);
      opacity: 0.75;
    }
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
          <div>
            <img src="/essential.jpg" />
          </div>
          <span>Oli Essenziali</span>
        </Service>
        <Service>
          <div>
            <img src="/ayurveda.jpg" />
          </div>
          <span>Ayurveda</span>
        </Service>
        <Service>
          <div>
            <img src="/sunset.jpg" />
          </div>
          <span>Linfodrenaggio</span>
        </Service>
        <Service>
          <div>
            <img src="/hot-stones.jpg" />
          </div>
          <span>Hot Stones</span>
        </Service>
      </Services>
    </Container>
  );
};

export default Massages;
