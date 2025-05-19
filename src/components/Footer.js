import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

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
        <SocialLink href="https://x.com/christopheerLee?t=1wEedpOC6CFBr32-wYMeTw&s=08 " target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} />
        </SocialLink>
        <SocialLink href="https://github.com/omtiginer045" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </SocialLink>
        <SocialLink href="https://www.facebook.com/omersuleyman.coskun" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} />
        </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/%C3%B6mer-co%C5%9Fkun-220157295/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
          </SocialLink>
      </SocialLinks>
      <Copyright>
        © {new Date().getFullYear()} Tüm hakları saklıdır.
      </Copyright>
    </FooterSection>
  );
};

export default Footer; 