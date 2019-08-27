import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const LightboxContainer = styled.section`
  font-size: 2rem;

  user-select: none;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  max-height: 100vh;
  max-width: 100vw;
  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;

const Header = styled.div`
  z-index: 4;
  position: absolute;
  right: 0;
  top: 0;

  padding: 1rem;

  cursor: pointer;
`;

const ImageContainer = styled.div`
  z-index: 2;
  display: flex;
  img {
    width: 100%;
    object-fit: contain;
  }

  padding: 3rem 0;
`;

const Body = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > * {
    height: 100%;
  }
`;

const Navigation = styled.div`
  z-index: 3;

  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;

  position: absolute;
  &:first-child {
    left: 0;
  }

  &:last-child {
    right: 0;
  }

  @media (min-width: 1024px) {
    position: relative;
  }

  cursor: pointer;
`;

const Lightbox = ({ current, close, previous, next }) => (
  <>
    <LightboxContainer>
      <Header onClick={close}>
        <FontAwesomeIcon icon="times" />
      </Header>
      <Body>
        <Backdrop onClick={close} />
        <Navigation onClick={previous}>
          <FontAwesomeIcon icon="chevron-left" />
        </Navigation>
        <ImageContainer>
          <img src={current} />
        </ImageContainer>
        <Navigation onClick={next}>
          <FontAwesomeIcon icon="chevron-right" />
        </Navigation>
      </Body>
    </LightboxContainer>
  </>
);

export default Lightbox;
