import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material';
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  scroll-margin-top: 90px;
  padding: 40px 0 80px 0;
  @media (max-width: 960px) {
    padding: 20px 0;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  padding: 0 16px;
  gap: 12px;
`;

const Title = styled.h2`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  margin-top: 28px;
  gap: 32px;
  justify-content: center;

  @media (max-width: 860px) {
    flex-direction: column;
    align-items: center;
  }
`;

const TouchCard = styled.div`
  flex: 1;
  max-width: 440px;
  width: 100%;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  border: 1px solid rgba(133, 76, 230, 0.35);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const TouchTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const TouchSubtitle = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.5;
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 10px;
  background: rgba(133, 76, 230, 0.08);
  border: 1px solid rgba(133, 76, 230, 0.2);
  color: ${({ theme }) => theme.text_primary};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: rgba(133, 76, 230, 0.2);
    border-color: ${({ theme }) => theme.primary};
    transform: translateX(4px);
  }

  svg {
    font-size: 20px;
    color: ${({ theme }) => theme.primary};
    flex-shrink: 0;
  }
`;

const ContactForm = styled.form`
  flex: 1.2;
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  border: 1px solid rgba(133, 76, 230, 0.35);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 14px;

  @media (max-width: 768px) {
    padding: 24px;
  }
`;

const FormTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 4px;
`;

const ContactInput = styled.input`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  font-size: 15px;
  font-family: inherit;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 16px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background-color: rgba(133, 76, 230, 0.05);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.7;
  }
`;

const ContactInputMessage = styled.textarea`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  font-size: 15px;
  font-family: inherit;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 10px;
  padding: 12px 16px;
  resize: vertical;
  min-height: 110px;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    background-color: rgba(133, 76, 230, 0.05);
  }

  &::placeholder {
    color: ${({ theme }) => theme.text_secondary};
    opacity: 0.7;
  }
`;

const ContactButton = styled.button`
  width: 100%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 4px;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0px 4px 20px rgba(133, 76, 230, 0.5);
    filter: brightness(1.1);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const Contact = () => {
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_zod5z1y';
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_3lja61b';
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'pJ4QuHt4PqqZMp7_S';

    emailjs
      .sendForm(serviceId, templateId, form.current, publicKey)
      .then(
        () => {
          setLoading(false);
          setSnackbar({
            open: true,
            message: 'Thank you! Your message has been sent successfully.',
            severity: 'success',
          });
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setSnackbar({
            open: true,
            message: 'Unable to send message via form. Please email directly at avinaash001@gmail.com.',
            severity: 'error',
          });
        }
      );
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for project inquiries or career opportunities!</Desc>

        <ContentContainer>
          <TouchCard>
            <TouchTitle>Get in Touch 📬</TouchTitle>
            <TouchSubtitle>
              Have an idea, project, or opportunity you want to discuss? Connect with me directly through any of these channels:
            </TouchSubtitle>
            <ContactList>
              <ContactLink href={`mailto:${Bio.email}`}>
                <FaEnvelope />
                <span>{Bio.email}</span>
              </ContactLink>
              <ContactLink href={Bio.whatsapp} target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
                <span>WhatsApp / Phone</span>
              </ContactLink>
              <ContactLink href={Bio.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                <span>LinkedIn Profile</span>
              </ContactLink>
              <ContactLink href={Bio.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
                <span>GitHub Profile</span>
              </ContactLink>
            </ContactList>
          </TouchCard>

          <ContactForm ref={form} onSubmit={handleSubmit}>
            <FormTitle>Send a Message 🚀</FormTitle>
            <ContactInput
              placeholder="Your Name"
              name="from_name"
              type="text"
              required
            />
            <ContactInput
              placeholder="Your Email"
              name="from_email"
              type="email"
              required
            />
            <ContactInput
              placeholder="Subject"
              name="subject"
              type="text"
              required
            />
            <ContactInputMessage
              placeholder="Message"
              rows="4"
              name="message"
              required
            />
            <ContactButton type="submit" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </ContactButton>
          </ContactForm>
        </ContentContainer>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert
            onClose={() => setSnackbar((prev) => ({ ...prev, open: false }))}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
