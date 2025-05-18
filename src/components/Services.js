import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCode, faDatabase, faRocket} from '@fortawesome/free-solid-svg-icons';

const ServicesSection = styled.section`
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const ServiceCard = styled.div`
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ServiceIcon = styled.div`
  font-size: 2.5rem;
  color: #20c997;
  margin-bottom: 1.5rem;
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #ffffff;
`;

const ServiceDescription = styled.p`
  color: #ffffff;
  line-height: 1.6;
`;

const Services = () => {
  const services = [
    {
      icon: faCode,
      title: 'Web Geliştirme',
      description: 'Modern ve responsive web siteleri geliştiriyorum. HTML, CSS, JavaScript gibi modern framework\'ler kullanarak kullanıcı dostu arayüzler oluşturuyorum.'
    },
    {
      icon: faCode,
      title: 'Görsel Programlama',
      description: 'Tüm web sitelerimi mobil cihazlara uyumlu olarak geliştiriyorum. Responsive tasarım prensiplerini kullanarak her ekran boyutunda mükemmel görünüm sağlıyorum.'
    },
    {
      icon: faRocket,
      title: 'Roket Geliştirme',
      description: 'Balıkesir Üniveritesi\'nin öğrenci topluluğu olan Misya\'nın roket takımında Arduino kullanarak sensörleri çalıştırıp roketin algoritmasını yazabiliyorum.'
    },
    {
      icon: faDatabase,
      title: 'Veritabanı Yönetimi',
      description: 'SQlite veritabanı ile çalışıyorum. Veritabanına ekleme çıkarma yapma .'
    }
  ];

  return (
    <ServicesSection id="services">
      <Container>
        <SectionTitle>Neler Yapabilirim?</SectionTitle>
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard key={index}>
              <ServiceIcon>
                <FontAwesomeIcon icon={service.icon} />
              </ServiceIcon>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </Container>
    </ServicesSection>
  );
};

export default Services; 