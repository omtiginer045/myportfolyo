import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
`;

const HeroContent = styled.div`
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: #20c997;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 2rem;
`;

const SocialLink = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #20c997;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="home">
      <HeroContent>
        <Title>Merhaba, Ben Ömer</Title>
        <Subtitle>Full Stack Web Developer</Subtitle>
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
      </HeroContent>
    </HeroSection>
  );
};

export default Hero; 