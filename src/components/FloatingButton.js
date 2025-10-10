import React from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi';

const FloatingLink = styled.a`
  position: fixed;
  top: 90px;
  right: 25px;
  z-index: 1050;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background: linear-gradient(90deg, var(--accent-color-2), var(--accent-color-1));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: all 0.35s ease-in-out;
  overflow: hidden;
  white-space: nowrap;
  text-decoration: none;

  .icon {
    font-size: 24px;
    flex-shrink: 0;
    transition: all 0.35s ease-in-out;
  }

  .text {
    font-size: 16px;
    font-weight: 600;
    opacity: 0;
    max-width: 0;
    margin-left: 0;
    transition: opacity 0.2s ease-in-out, max-width 0.3s ease-in-out, margin-left 0.3s ease-in-out;
  }

  &:hover {
    width: 200px;
    transform: translateY(-2px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    color: white;
    text-decoration: none;

    .text {
      opacity: 1;
      max-width: 150px;
      margin-left: 10px;
    }
  }

  @media (max-width: 768px) {
    top: 80px;
    right: 20px;
    width: 45px;
    height: 45px;
    border-radius: 22.5px;

    .icon {
      font-size: 22px;
    }
    
    &:hover {
      width: 180px;
    }
  }
`;

const FloatingButton = () => {
  return (
    <FloatingLink
      href="https://narnia-lab.duckdns.org:8000/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="서비스 바로가기"
    >
      <FiExternalLink className="icon" />
      <span className="text">서비스 바로가기</span>
    </FloatingLink>
  );
};

export default FloatingButton;
