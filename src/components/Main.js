import React from 'react';
import styled from 'styled-components';
import shape from '../svgs/shape.svg';
import smooth from '../svgs/smooth.svg';
import { theme } from '../theme';
import Bio from './Bio';
import Contacts from './Contacts';
import Gallery from './Gallery';
import Header from './Header';
import Map from './Map';
import Massages from './Massages';
import Quote from './Quote';
import Services from './Services';

const Container = styled.section`
  max-width: 1024px;
  margin: auto;

  > * + * {
    margin-top: 3rem;
  }

  > header + * {
    margin-top: 0;
  }
`;

const GradientSection = styled.section`
  margin-top: -3rem;

  width: 100%;
  > img {
    width: 100%;

    & + * {
      margin-top: -10rem;
      padding-top: 8rem;
    }
  }

  background: ${theme.mainGradient};

  padding-bottom: 2rem;
  border-bottom-left-radius: 70% 3rem;
  border-bottom-right-radius: 70% 1rem;

  & + * {
    margin-top: -2rem;
    margin-bottom: 3rem;
  }

  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  background: ${({ background }) => background || 'auto'};
`;

const InnerRadiusSection = styled(Section)`
  position: relative;
  padding: 2rem 0;

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    height: 70%;

    background: ${theme.text};

    border-top-left-radius: 70% 20%;
    border-top-right-radius: 70% 20%;

    user-select: none;
  }
`;

const InvertedSection = styled(Section)`
  background: ${theme.text};
  color: ${theme.mainBg};
`;

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
  const { bio, quote, massages, services, contacts, gallery } = data;

  return (
    <React.Fragment>
      <ShapeSection />
      <Section>
        <Container>
          <Header />
          <Bio {...bio} />
          <Quote {...quote} />
          <Massages {...massages} />
        </Container>
      </Section>
      <GradientSection>
        <img src={smooth} />
        <Container>
          <Services {...services} />
        </Container>
      </GradientSection>
      <InvertedSection>
        <Gallery {...gallery} />
      </InvertedSection>
      <Section>
        <Container>
          <Contacts {...contacts} />
        </Container>
      </Section>
      <InnerRadiusSection>
        <Container>
          <Map />
        </Container>
      </InnerRadiusSection>
    </React.Fragment>
  );
};

export default Main;
