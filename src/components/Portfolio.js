import React, { useState } from 'react';
import styled from 'styled-components';

const PortfolioSection = styled.section`
  padding: 100px 2rem;
  background-color: #1a1a1a;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #ffffff;
`;

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? '#20c997' : '#2a2a2a'};
  color: #ffffff;
  border: none;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #20c997;
  }
`;

const PortfolioGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const PortfolioItem = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    .overlay {
      opacity: 1;
    }
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(32, 201, 151, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  padding: 1rem;
  text-align: center;
`;

const ProjectTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  color: #ffffff;
  font-size: 1rem;
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Ticaret Sitesi',
      description: 'React ve Node.js ile geliştirilmiş modern bir e-ticaret platformu',
      image: 'https://via.placeholder.com/400x300',
      category: 'web'
    },
    {
      id: 2,
      title: 'Mobil Uygulama',
      description: 'React Native ile geliştirilmiş cross-platform mobil uygulama',
      image: 'https://via.placeholder.com/400x300',
      category: 'mobile'
    },
    {
      id: 3,
      title: 'Dashboard',
      description: 'Vue.js ve Chart.js ile geliştirilmiş analitik dashboard',
      image: 'https://via.placeholder.com/400x300',
      category: 'web'
    },
    {
      id: 4,
      title: 'API Servisi',
      description: 'Node.js ve Express ile geliştirilmiş RESTful API',
      image: 'https://via.placeholder.com/400x300',
      category: 'backend'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'web', label: 'Web' },
    { id: 'mobile', label: 'Mobil' },
    { id: 'backend', label: 'Backend' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <PortfolioSection id="portfolio">
      <Container>
        <SectionTitle>Portfolyo</SectionTitle>
        <FilterButtons>
          {filters.map(filter => (
            <FilterButton
              key={filter.id}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </FilterButton>
          ))}
        </FilterButtons>
        <PortfolioGrid>
          {filteredProjects.map(project => (
            <PortfolioItem key={project.id}>
              <PortfolioImage src={project.image} alt={project.title} />
              <Overlay className="overlay">
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
              </Overlay>
            </PortfolioItem>
          ))}
        </PortfolioGrid>
      </Container>
    </PortfolioSection>
  );
};

export default Portfolio; 