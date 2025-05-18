import React, { useState } from 'react';
import styled from 'styled-components';
import roketImage from '../assets/roket.jpg';
import soruBankasiImage from '../assets/soruBankasi.jpg';
import notepadImage from '../assets/notDefteri.jpg';
import turkiyeImage from '../assets/turkiyebolge.jpg';

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

const PortfolioItem = styled.a`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  height: 250px;
  background-color: #2a2a2a;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    .overlay {
      opacity: 1;
    }
    .title {
      opacity: 0;
    }
  }
`;

const PortfolioImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.3;
  transition: opacity 0.3s ease;
`;

const Title = styled.h3`
  position: absolute;
  color: #ffffff;
  font-size: 1.5rem;
  text-align: center;
  padding: 1rem;
  transition: opacity 0.3s ease;
  z-index: 1;
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

const ProjectDescription = styled.p`
  color: #ffffff;
  font-size: 1rem;
  line-height: 1.5;
`;

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Roket Algoritması',
      description: 'Arduino IDE kullanarak basınç, GPS ve ivme-gyro sensörlerini kullanarak optimize  çalışan bir roket algoritması',
      image: roketImage,
      category: 'Roket',
      githubUrl: 'https://github.com/omtiginer045/Roket_algoritma/tree/master'
    },
    {
      id: 2,
      title: 'Soru Bankası',
      description: 'Görsel programlama ile geliştirilmiş, öğrencilerin soru çözebileceği ve kendilerini test edebileceği bir uygulama',
      image: soruBankasiImage,
      category: 'Görsel Programlama',
      githubUrl: 'https://github.com/omtiginer045/soru_bankasi/tree/master'
    },
    {
      id: 3,
      title: 'NotePad',
      description: 'Görsel programlama ile geliştirilmiş, metin düzenleme ve kaydetme özelliklerine sahip basit bir not defteri uygulaması',
      image: notepadImage,
      category: 'Görsel Programlama',
      githubUrl: 'https://github.com/omtiginer045/not_defteri/tree/master'
    },
    {
      id: 4,
      title: 'Turkiye Bolgeleri',
      description: 'Görsel programlama ile geliştirilmiş, seçilen şehrin bölgesinin kültürel ve iklimsel yapısı hakkında bilgi veren ve ayrıca iki bölgeyi karşılaştırma imkanı sunan bir uygulama.',
      image: turkiyeImage,
      category: 'Görsel Programlama',
      githubUrl: 'https://github.com/omtiginer045/turkiye_bolgeleri/tree/master'
    }
  ];

  const filters = [
    { id: 'all', label: 'Tümü' },
    { id: 'Roket', label: 'Roket' },
    { id: 'Görsel Programlama', label: 'Görsel Programlama' }
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
                <PortfolioItem
                    key={project.id}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <PortfolioImage src={project.image} alt={project.title} />
                  <Title className="title">{project.title}</Title>
                  <Overlay className="overlay">
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