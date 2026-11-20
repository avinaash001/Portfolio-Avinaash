import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowUp } from 'react-icons/fa';

const ScrollBtn = styled.button`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  z-index: 40;
  box-shadow: 0 4px 16px rgba(133, 76, 230, 0.4);
  transition: all 0.3s ease-in-out;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transform: ${({ visible }) => (visible ? 'scale(1)' : 'scale(0.7)')};
  pointer-events: ${({ visible }) => (visible ? 'all' : 'none')};

  &:hover {
    transform: ${({ visible }) => (visible ? 'scale(1.1) translateY(-3px)' : 'scale(0.7)')};
    box-shadow: 0 8px 24px rgba(133, 76, 230, 0.6);
  }

  @media (max-width: 640px) {
    bottom: 24px;
    right: 24px;
    width: 40px;
    height: 40px;
    font-size: 14px;
  }
`;

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollBtn
      onClick={scrollToTop}
      visible={visible}
      aria-label="Back to top"
      type="button"
    >
      <FaArrowUp />
    </ScrollBtn>
  );
};

export default BackToTop;
