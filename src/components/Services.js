import React from 'react';
import styled from 'styled-components';
import relax from '../svgs/relax.svg';

const Container = styled.section`
  padding: 0 2rem;

  display: grid;
  grid-template-rows: repeat(1fr);
  grid-gap: 1rem;

  > * {
    padding: 1rem;
    max-width: 33rem;
    margin: auto;
    display: flex;
    flex-direction: column;

    align-items: center;

    h1 {
      font-family: 'Open Sans', sans-serif;
      font-weight: bold;
      font-size: 1.1rem;
    }

    hr {
      display: block;
      height: 1px;
      border: 0;
      border-top: 1px solid currentColor;
      margin: 1em auto;
      width: 70%;
    }

    p {
      text-align: center;
      font-weight: lighter;
      line-height: 1.4;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;

    > *:first-child,
    > *:last-child:not(:nth-child(odd)) {
      grid-column-start: span 2;
    }
  }
`;

const Illustration = styled.img`
  max-width: 12rem;
`;

const Services = ({ services }) => {
  return (
    <Container>
      <Illustration src={relax} />
      {services.map(({ title, description }) => (
        <article key={title}>
          <h1>{title}</h1>
          <hr />
          <p>{description}</p>
        </article>
      ))}
    </Container>
  );
};

export default Services;
