import React from 'react';
import styled from 'styled-components';
import logo from '../svgs/logo.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;

  @media (max-width: 480px) {
    flex-direction: column;

    > * + * {
      margin-top: 1rem;
    }
  }
`;

const Logo = styled.img`
  opacity: 0.8;
  height: 5rem;
`;

const Navigation = styled.nav`
  a {
    text-decoration: none;
    transition: opacity 500ms ease-in-out;

    &:hover {
      opacity: 0.5;
    }
  }

  > * + * {
    margin-left: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logo} />

      <Navigation>
        <a href="#about">Giada</a>
        <a href="#massaggi">Massaggi</a>
        <a href="#contatti">Contattami</a>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
