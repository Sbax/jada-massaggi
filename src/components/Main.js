import React from 'react';
import styled from 'styled-components';
import shape from '../svgs/shape.svg';
import { theme } from '../theme';
import Bio from './Bio';
import Header from './Header';
import Quote from './Quote';
import Massages from './Massages';

import smooth from '../svgs/smooth.svg';

const Container = styled.main`
  max-width: 1024px;
  margin: auto;

  > * + * {
    margin-top: 3rem;
  }
`;

const GradientSection = styled.div`
  width: 100%;
  > img {
    width: 100%;

    & + * {
      margin-top: -10rem;
      padding-top: 10rem;
    }
  }

  background: ${theme.mainGradient};
`;

const Section = styled.section``;

const ShapeSection = styled(Section)`
  min-height: 100vh;
  margin-right: 0;

  mask: url(${shape});
  mask-repeat: no-repeat;
  mask-size: 70%;
  mask-position: top right;

  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: ${theme.mainGradient};
  opacity: 0.3;

  pointer-events: none;
`;

const Main = ({ data }) => {
  const { bio, quote, massages } = data;

  return (
    <React.Fragment>
      <ShapeSection />
      <Container>
        <Header />
        <Bio {...bio} />
        <Quote {...quote} />
        <Massages {...massages} />
      </Container>
      <GradientSection>
        <img src={smooth} />
        <Container>Lavoro in corso</Container>
      </GradientSection>
    </React.Fragment>
  );
};

export default Main;
