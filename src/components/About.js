import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
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

const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  }
`;

const AboutText = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #20c997;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #ffffff;
    margin-bottom: 1.5rem;
  }
`;

const Skills = styled.div`
  margin-top: 2rem;
`;

const SkillItem = styled.div`
  margin-bottom: 1rem;
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const SkillBar = styled.div`
  height: 10px;
  background-color: #333;
  border-radius: 5px;
  overflow: hidden;
`;

const SkillLevel = styled.div`
  height: 100%;
  background-color: #20c997;
  width: ${props => props.level}%;
  transition: width 1s ease-in-out;
`;

const About = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
  ];

  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>Ben Kimim?</SectionTitle>
        <AboutContent>
          <AboutImage>
            <img src="https://via.placeholder.com/500x500" alt="Profile" />
          </AboutImage>
          <AboutText>
            <h3>Full Stack Web Developer</h3>
            <p>
              Merhaba! Ben [Adınız], tutkulu bir Full Stack Web Developer'ım. Modern web teknolojileri
              kullanarak kullanıcı dostu ve yenilikçi web uygulamaları geliştiriyorum.
            </p>
            <p>
              Yazılım geliştirme yolculuğuma [Yıl] yılında başladım ve o zamandan beri sürekli
              kendimi geliştirmeye ve yeni teknolojileri öğrenmeye devam ediyorum.
            </p>
            <Skills>
              {skills.map((skill, index) => (
                <SkillItem key={index}>
                  <SkillName>
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </SkillName>
                  <SkillBar>
                    <SkillLevel level={skill.level} />
                  </SkillBar>
                </SkillItem>
              ))}
            </Skills>
          </AboutText>
        </AboutContent>
      </Container>
    </AboutSection>
  );
};

export default About; 