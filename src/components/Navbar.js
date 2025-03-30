import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGraduationCap, faCode, faProjectDiagram, faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="navbar-custom">
      <Container fluid className="px-5">
        <Navbar.Brand as={Link} to="/" className="brand-text">
          <span className="text-danger">P</span>avani's<span className="text-danger"> P</span>ortfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              <FontAwesomeIcon icon={faHome} className="me-1" /> Home
            </Nav.Link>
            <Nav.Link as={Link} to="/education" className="nav-link-custom">
              <FontAwesomeIcon icon={faGraduationCap} className="me-1" /> Education
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" className="nav-link-custom">
              <FontAwesomeIcon icon={faCode} className="me-1" /> Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-link-custom">
              <FontAwesomeIcon icon={faProjectDiagram} className="me-1" /> Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              <FontAwesomeIcon icon={faEnvelope} className="me-1" /> Contact
            </Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1VevgzDHczArFVp51YKuO81tEHc_VnhXa/view?usp=sharing" download className="nav-link-custom">
              <FontAwesomeIcon icon={faFileDownload} className="me-1" /> Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 