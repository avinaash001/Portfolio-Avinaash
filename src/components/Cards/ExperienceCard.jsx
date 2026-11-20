import React, { useState } from 'react';
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
  height: 50px;
  width: 50px;
  object-fit: contain;
  background-color: #0E0D1A;
  border-radius: 10px;
  padding: 4px;
  border: 1px solid rgba(133, 76, 230, 0.2);

  @media only screen and (max-width: 768px) {
    height: 42px;
    width: 42px;
  }
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Role = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  @media only screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Company = styled.div`
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

const Description = styled.div`
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.6;
  opacity: 0.92;

  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const DescText = styled.p`
  margin: 0;
  ${({ expanded }) =>
    !expanded &&
    `
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 0 0 0;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s ease;

  &:hover {
    color: #BE1ADB;
    text-decoration: underline;
  }
`;

const Skills = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 6px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: 10px;
`;

const SkillsTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

const SkillTag = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  background: rgba(133, 76, 230, 0.12);
  border: 1px solid rgba(133, 76, 230, 0.25);
  border-radius: 6px;
  padding: 3px 8px;

  @media only screen and (max-width: 768px) {
    font-size: 11px;
    padding: 2px 6px;
  }
`;

const ExperienceCard = ({ experience }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card>
      <Top>
        <Image src={experience.img} alt={experience.company} loading="lazy" />
        <Body>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Body>
      </Top>
      <Description>
        {experience?.desc && (
          <>
            <DescText expanded={expanded}>{experience.desc}</DescText>
            <ToggleButton
              type="button"
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
            >
              {expanded ? 'Show less ▴' : 'Read more ▾'}
            </ToggleButton>
          </>
        )}
        {experience?.skills && (
          <Skills>
            <SkillsTitle>Skills used:</SkillsTitle>
            <ItemWrapper>
              {experience.skills.map((skill) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </ItemWrapper>
          </Skills>
        )}
      </Description>
    </Card>
  );
};

export default ExperienceCard;
