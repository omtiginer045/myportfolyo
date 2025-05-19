import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const ContactSection = styled.section`
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

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    color: #20c997;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const ContactIcon = styled.div`
  font-size: 1.5rem;
  color: #20c997;
  margin-right: 1rem;
  width: 40px;
  text-align: center;
`;

const ContactText = styled.div`
  font-size: 1.1rem;
`;

const ContactForm = styled.form`
  background-color: #2a2a2a;
  padding: 2rem;
  border-radius: 10px;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ffffff;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #20c997;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #444;
  border-radius: 5px;
  background-color: #333;
  color: #ffffff;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #20c997;
  }
`;

const SubmitButton = styled.button`
  background-color: #20c997;
  color: #ffffff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1ba87e;
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>İletişim</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <h3>İletişim Bilgileri</h3>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ContactIcon>
              <ContactText>ocoskun684@gmail.com</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faPhone} />
              </ContactIcon>
              <ContactText>+90 537 439 5983</ContactText>
            </ContactItem>
            <ContactItem>
              <ContactIcon>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </ContactIcon>
              <ContactText>Balikesir, Türkiye</ContactText>
            </ContactItem>
          </ContactInfo>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="name">Ad Soyad</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">E-posta</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Mesaj</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <SubmitButton type="submit">Gönder</SubmitButton>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
};

export default Contact; 