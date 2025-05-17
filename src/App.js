import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const AppContainer = styled.div`
  background-color: #1a1a1a;
  color: #ffffff;
  min-height: 100vh;
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
      </AppContainer>
    </Router>
  );
}

export default App;
