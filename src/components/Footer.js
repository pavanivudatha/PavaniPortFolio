import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer-custom py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="mb-0 text-white">
              © {new Date().getFullYear()} Pavani Vudatha. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-3 mt-md-0">
            <div className="social-links">
              <a href="https://github.com/pavanivudatha" target="_blank" rel="noopener noreferrer" className="text-danger me-4">
                <FontAwesomeIcon icon={faGithub} size="lg" />
              </a>
              <a href="https://linkedin.com/in/pavani-vudatha" target="_blank" rel="noopener noreferrer" className="text-danger me-4">
                <FontAwesomeIcon icon={faLinkedin} size="lg" />
              </a>
              <a href="mailto:pavanivudatha2005@gmail.com" className="text-danger">
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer; 