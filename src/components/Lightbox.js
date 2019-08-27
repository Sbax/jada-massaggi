import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const ScrollLock = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const LightboxContainer = styled.section`
  font-size: 3rem;
  user-select: none;

  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  max-height: 100vh;
  max-width: 100vw;

  background: rgba(0, 0, 0, 0.5);

  z-index: 9;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Header = styled.div`
  position: absolute;
  right: 0;
  top: 0;

  padding: 2rem;

  cursor: pointer;
`;

const Body = styled.div`
  flex: 1;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2rem;

  > div {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 2rem;

    cursor: pointer;
  }

  img {
    width: auto;
    height: 100%;
    display: block;
  }
`;

const Lightbox = ({ current, close, previous, next }) => (
  <>
    <ScrollLock />
    <LightboxContainer>
      <Header onClick={close}>
        <FontAwesomeIcon icon="times" />
      </Header>
      <Body>
        <div onClick={previous}>
          <FontAwesomeIcon icon="chevron-left" />
        </div>
        <img src={current} />
        <div onClick={next}>
          <FontAwesomeIcon icon="chevron-right" />
        </div>
      </Body>
    </LightboxContainer>
  </>
);

export default Lightbox;
