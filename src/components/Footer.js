import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

const FooterSection = styled.footer`
  background-color: #1a1a1a;
  padding: 2rem;
  text-align: center;
  border-top: 1px solid #333;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #20c997;
  }
`;

const Copyright = styled.p`
  color: #ffffff;
  font-size: 1rem;
`;

const Footer = () => {
  return (
    <FooterSection>
      <SocialLinks>
        <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
        <SocialLink href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
      </SocialLinks>
      <Copyright>
        © {new Date().getFullYear()} Tüm hakları saklıdır.
      </Copyright>
    </FooterSection>
  );
};

export default Footer; 