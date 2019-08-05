import React from 'react';
import styled from 'styled-components';

import lotus from '../svgs/lotus.svg';

const Container = styled.section`
  display: flex;
  max-width: 75vw;
  margin: auto;

  > * + * {
    margin-left: 2rem;
  }
`;

const Illustration = styled.img`
  width: 20rem;
  opacity: 0.65;
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
