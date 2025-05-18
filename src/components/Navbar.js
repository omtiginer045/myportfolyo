import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';


const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(26, 26, 26, 0.95);
  padding: 1rem 2rem;
  z-index: 1000;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const MenuItems = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(26, 26, 26, 0.95);
    padding: 1rem;
  }
`;

const MenuItem = styled(Link)`
  color: #ffffff;
  cursor: pointer;
  transition: color 0.3s ease;

  &:hover {
    color: #20c997;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Nav style={{ backgroundColor: scrolled ? 'rgba(26, 26, 26, 0.95)' : 'transparent' }}>
      <NavContainer>
        <Logo>Portfolio</Logo>
        <MenuButton onClick={() => setIsOpen(!isOpen)}>
          ☰
        </MenuButton>
        <MenuItems isOpen={isOpen}>
          <MenuItem to="home" smooth={true} duration={500}>Ana Sayfa</MenuItem>
          <MenuItem to="about" smooth={true} duration={500}>Ben Kimim?</MenuItem>
          <MenuItem to="services" smooth={true} duration={500}>Neler Yapabilirim?</MenuItem>
          <MenuItem to="portfolyo" smooth={true} duration={500}>Portfolyo</MenuItem>
          <MenuItem to="contact" smooth={true} duration={500}>İletişim</MenuItem>
        </MenuItems>
      </NavContainer>
    </Nav>
  );
};

export default Navbar; 