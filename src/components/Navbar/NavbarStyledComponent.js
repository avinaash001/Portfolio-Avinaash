import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 50;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  gap: 8px;
`;

export const LogoBadge = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: white;
  box-shadow: 0 2px 8px rgba(133, 76, 230, 0.4);
`;

export const Span = styled.span`
  padding: 0 4px;
  font-weight: 700;
  font-size: 19px;
  color: ${({ theme }) => theme.text_primary};
  letter-spacing: 0.5px;
  @media (max-width: 420px) {
    font-size: 16px;
  }
`;

export const NavItems = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 0 6px;
  list-style: none;

  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ theme, active }) => (active ? theme.primary : theme.text_primary)};
  font-weight: ${({ active }) => (active ? '600' : '500')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 15px;
  position: relative;
  padding: 6px 0;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ active }) => (active ? '100%' : '0')};
    height: 2px;
    background: ${({ theme }) => theme.primary};
    transition: width 0.2s ease-in-out;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
    &::after {
      width: 100%;
    }
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 42px;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 15px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
    box-shadow: 0 4px 16px rgba(133, 76, 230, 0.4);
    transform: translateY(-2px);
  }

  @media screen and (max-width: 860px) {
    font-size: 14px;
    height: 38px;
    padding: 0 16px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  @media screen and (max-width: 860px) {
    display: none;
  }
`;

export const MobileIcon = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 1.5rem;

  @media screen and (max-width: 860px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  width: 100%;
  padding: 24px 24px 32px 24px;
  background: rgba(25, 25, 36, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(133, 76, 230, 0.3);
  border-radius: 0 0 20px 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-120%)')};
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  pointer-events: ${({ isOpen }) => (isOpen ? 'all' : 'none')};
  z-index: 100;
`;

export const MobileLink = styled.a`
  color: ${({ theme, active }) => (active ? theme.primary : theme.text_primary)};
  font-weight: ${({ active }) => (active ? '600' : '500')};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
