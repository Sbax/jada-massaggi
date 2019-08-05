import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  display: flex;
  align-items: center;

  > * + * {
    margin-left: 3rem;
  }

  padding: 0 1rem;
`;

const BioContainer = styled.article`
  flex: 1;

  h1 {
    font-size: 2.5rem;
    margin: 0.67rem 0;
  }

  h2 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
  }
`;

const Profile = styled.img`
  border-radius: 100%;
  width: 20rem;
  height: 20rem;
  box-shadow: 0 30px 60px 0 rgba(0, 0, 0, 0.3);
`;

const Bio = ({ profilePic, name, subtitle, bio }) => {
  return (
    <Container>
      <BioContainer>
        <h1>{name}</h1>
        <h2>{subtitle}</h2>
        <p dangerouslySetInnerHTML={{ __html: bio }} />
      </BioContainer>

      <Profile src={profilePic} />
    </Container>
  );
};

export default Bio;
