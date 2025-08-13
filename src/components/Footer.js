import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: var(--secondary-color);
  padding: 40px 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col>
            <p className="text-white-50 mb-0">
              &copy; 2025 Narnia Lab. All Rights Reserved.
            </p>
            <p className="text-white-50 small">
              Designed for the Future of Education.
            </p>
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
