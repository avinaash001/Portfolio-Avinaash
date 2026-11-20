import React, { useState } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 100%;
  max-width: 480px;
  background-color: ${({ theme }) => theme.card};
  border-radius: 14px;
  box-shadow: 0 0 16px rgba(133, 76, 230, 0.15);
  border: 1px solid rgba(133, 76, 230, 0.35);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;
  height: 100%;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 30px rgba(133, 76, 230, 0.35);
    border-color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 16px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 10px;
  overflow: hidden;
  background-color: #0E0D1A;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const FallbackPlaceholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1C1C27 0%, #2A1B4E 50%, #171721 100%);
  color: ${({ theme }) => theme.text_primary};
  padding: 16px;
  text-align: center;
  border: 1px solid rgba(133, 76, 230, 0.2);
  gap: 8px;
`;

const FallbackIcon = styled.span`
  font-size: 28px;
`;

const FallbackTitle = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};
  background-color: rgba(133, 76, 230, 0.12);
  padding: 4px 10px;
  border-radius: 8px;
  border: 1px solid rgba(133, 76, 230, 0.25);
`;

const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;
`;

const Description = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
  line-height: 1.55;
`;

const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 12px;
  width: fit-content;

  ${({ badgeType }) =>
    badgeType === 'wip'
      ? `
    background: rgba(245, 158, 11, 0.15);
    color: #F59E0B;
    border: 1px solid rgba(245, 158, 11, 0.35);
  `
      : `
    background: rgba(16, 185, 129, 0.15);
    color: #10B981;
    border: 1px solid rgba(16, 185, 129, 0.3);
  `}
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
  padding-top: 10px;
  width: 100%;
`;

const Button = styled.a`
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  text-align: center;
  padding: 10px 18px;
  border-radius: 8px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  ${({ primary, theme }) =>
    primary
      ? `
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    color: ${theme.white};
    box-shadow: 0 2px 10px rgba(133, 76, 230, 0.3);
    &:hover {
      filter: brightness(1.15);
      box-shadow: 0 4px 16px rgba(133, 76, 230, 0.5);
    }
  `
      : `
    background: transparent;
    color: ${theme.text_primary};
    border: 1.5px solid ${theme.primary};
    &:hover {
      background: rgba(133, 76, 230, 0.15);
    }
  `}
`;

const ProjectCard = ({ project }) => {
  const [imgError, setImgError] = useState(false);

  // Normalize image URL for CRA public folder or remote URL
  const resolvedSrc = project.image.startsWith('http') || project.image.startsWith('data:')
    ? project.image
    : process.env.PUBLIC_URL + (project.image.startsWith('/') ? project.image : '/' + project.image);

  return (
    <Card>
      <ImageContainer>
        {imgError ? (
          <FallbackPlaceholder>
            <FallbackIcon>💻</FallbackIcon>
            <FallbackTitle>{project.title}</FallbackTitle>
          </FallbackPlaceholder>
        ) : (
          <Image
            src={resolvedSrc}
            alt={project.title}
            loading="lazy"
            onError={() => setImgError(true)}
          />
        )}
      </ImageContainer>

      <Tags>
        {project.tags?.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>

      <Details>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>

        {project.badges && project.badges.length > 0 && (
          <BadgeGroup>
            {project.badges.map((badge, idx) => (
              <Badge key={idx} badgeType={badge.type}>
                {badge.icon && <span>{badge.icon}</span>}
                {badge.text}
              </Badge>
            ))}
          </BadgeGroup>
        )}
      </Details>

      {(project.webapp || project.github) && (
        <ButtonGroup>
          {project.webapp && (
            <Button
              primary
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </Button>
          )}
          {project.github && (
            <Button
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </Button>
          )}
        </ButtonGroup>
      )}
    </Card>
  );
};

export default ProjectCard;
