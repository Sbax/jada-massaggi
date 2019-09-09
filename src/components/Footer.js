import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-bottom: 2rem;
  line-height: 1.5;

  opacity: 0.5;

  white-space: pre-wrap;
`;

const Footer = ({ data }) => (
  <FooterContainer dangerouslySetInnerHTML={{ __html: data }} />
);
export default Footer;
