import React, { useState } from 'react';
import styled from 'styled-components';
import { skills } from '../../data/constants';

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  scroll-margin-top: 90px;
  padding: 40px 0;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
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

export const Desc = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
    padding: 0 16px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  margin-top: 30px;
  padding: 0 16px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const Skill = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.card};
  border: 1px solid rgba(133, 76, 230, 0.4);
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 26px 32px;
  transition: all 0.3s ease-in-out;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    box-shadow: rgba(133, 76, 230, 0.25) 0px 6px 30px;
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    padding: 20px 24px;
  }
  @media (max-width: 500px) {
    padding: 16px 18px;
  }
`;

const SkillTitle = styled.h3`
  font-size: 26px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: ${({ hasSubtitle }) => (hasSubtitle ? '8px' : '20px')};
  text-align: center;
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const SkillSubtitle = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  text-align: center;
  margin-bottom: 20px;
  opacity: 0.95;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 10px;
  margin-top: auto;
`;

const SkillItem = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  border: 1px solid rgba(242, 243, 244, 0.3);
  border-radius: 12px;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.02);
  transition: all 0.2s ease-in-out;

  &:hover {
    border-color: ${({ theme }) => theme.primary};
    background: rgba(133, 76, 230, 0.08);
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 13px;
    padding: 6px 10px;
  }
`;

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
  object-fit: contain;
`;

const FallbackSparkle = styled.span`
  font-size: 18px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`;

const SkillItemComponent = ({ item }) => {
  const [error, setError] = useState(false);

  return (
    <SkillItem>
      {error ? (
        <FallbackSparkle role="img" aria-label="sparkle">✨</FallbackSparkle>
      ) : (
        <SkillImage
          src={item.image}
          alt={item.name}
          width="24"
          height="24"
          loading="lazy"
          onError={() => setError(true)}
        />
      )}
      {item.name}
    </SkillItem>
  );
};

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Technologies and tools I work with regularly across full-stack development.</Desc>
        <SkillsContainer>
          {skills.map((skillGroup) => (
            <Skill key={skillGroup.title}>
              <SkillTitle hasSubtitle={Boolean(skillGroup.subtitle)}>
                {skillGroup.title}
              </SkillTitle>
              {skillGroup.subtitle && (
                <SkillSubtitle>{skillGroup.subtitle}</SkillSubtitle>
              )}
              <SkillList>
                {skillGroup.skills.map((item) => (
                  <SkillItemComponent key={item.name} item={item} />
                ))}
              </SkillList>
            </Skill>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Skills;
