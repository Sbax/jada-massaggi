import React from 'react';
import styled from 'styled-components';

import lotus from '../svgs/lotus.svg';

const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0 2rem;
  margin: auto;

  @media (min-width: 1024px) {
    flex-direction: row;

    > * + * {
      margin-left: 2rem;
    }
  }
`;

const Illustration = styled.img`
  margin: auto;
  order: 1;

  width: 12rem;
  opacity: 0.65;

  @media (min-width: 1024px) {
    order: 0;
    width: 20rem;
  }
`;

const QuoteContainer = styled.blockquote`
  h1 {
    padding-left: 1em;
    text-indent: -1em;
    line-height: 1.5;

    font-size: 2.5rem;
  }

  h2 {
    text-align: right;
    opacity: 0.65;
    margin: 1em 0;

    font-size: 2rem;
  }
`;

const Quote = ({ quote, author }) => (
  <Container>
    <Illustration src={lotus} />
    <QuoteContainer>
      <h1>"{quote}"</h1>
      <h2>– {author}</h2>
    </QuoteContainer>
  </Container>
);

export default Quote;
