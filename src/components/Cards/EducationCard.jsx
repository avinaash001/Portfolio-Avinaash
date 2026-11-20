import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 650px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  padding: 16px 20px;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.35);
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 8px 30px rgba(133, 76, 230, 0.25);
    border-color: ${({ theme }) => theme.primary};
    transform: translateY(-4px);
  }

  @media only screen and (max-width: 768px) {
    padding: 12px 14px;
    gap: 10px;
    max-width: 100%;
  }
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  gap: 14px;
  align-items: center;
`;

const Image = styled.img`
  height: 48px;
  width: 48px;
  object-fit: contain;
  background-color: #0E0D1A;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid rgba(133, 76, 230, 0.25);

  @media only screen and (max-width: 768px) {
    height: 40px;
    width: 40px;
    padding: 6px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const School = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const Date = styled.div`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  opacity: 0.8;
  @media only screen and (max-width: 768px) {
    font-size: 11px;
  }
`;

const GradeBadge = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.primary};
  background: rgba(133, 76, 230, 0.1);
  border: 1px solid rgba(133, 76, 230, 0.25);
  border-radius: 6px;
  padding: 4px 10px;
  width: fit-content;

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.p`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.5;
  margin: 0;
  opacity: 0.9;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const EducationCard = ({ education }) => {
  return (
    <Card>
      <Top>
        <Image src={education.img} alt={education.school} loading="lazy" />
        <Body>
          <School>{education.school}</School>
          <Degree>{education.degree}</Degree>
          {education.date && <Date>{education.date}</Date>}
        </Body>
      </Top>
      {education.grade && (
        <GradeBadge>
          Score: {education.grade}
        </GradeBadge>
      )}
      {education.desc && <Description>{education.desc}</Description>}
    </Card>
  );
};

export default EducationCard;
