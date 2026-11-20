import React, { useState, useEffect } from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  LogoBadge,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Bio } from '../../data/constants';

const navItemsList = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = navItemsList.map((item) => item.href.substring(1));

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <LogoBadge>AT</LogoBadge>
          <Span>Avinash Tiwari</Span>
        </NavLogo>

        <MobileIcon
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </MobileIcon>

        <NavItems>
          {navItemsList.map((item) => (
            <li key={item.name}>
              <NavLink
                href={item.href}
                active={activeSection === item.href.substring(1)}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </NavItems>

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </GitHubButton>
        </ButtonContainer>

        <MobileMenu isOpen={isOpen}>
          {navItemsList.map((item) => (
            <MobileLink
              key={item.name}
              href={item.href}
              active={activeSection === item.href.substring(1)}
              onClick={closeMenu}
            >
              {item.name}
            </MobileLink>
          ))}
          <GitHubButton
            style={{ width: '80%', textAlign: 'center', marginTop: '8px' }}
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            GitHub Profile
          </GitHubButton>
        </MobileMenu>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
