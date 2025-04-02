import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import aboutBg from '../assets/about-bg.jpg';
import resume from '../assets/PavaniVudatha_Resume (7).pdf'; 

const Home = () => {
  return (
    <div className="home-section text-white d-flex align-items-center min-vh-100 bg-dark">
      <Container>
        <Row className="align-items-center text-center">
          <Col md={5} className="text-center">
            <div className="p-3">
              <img src={aboutBg} alt="Profile" className="rounded-circle w-75 shadow bg-white" />
            </div>
          </Col>
          <Col md={7} className="text-start">
            <h1 className="display-4 fw-bold text-danger mb-4">Hello, I'm <span className="text-white">Pavani Vudatha</span></h1>
            <p className="lead text-white mb-4">
              I'm a Computer Science and Artificial Intelligence student at Sri Vasavi Engineering College, Tadepalligudem.
            </p>
            <div className="mb-12">
              <a href="https://github.com/pavanivudatha" target="_blank" rel="noopener noreferrer" className="text-danger me-4">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/pavani-vudatha" target="_blank" rel="noopener noreferrer" className="text-danger me-4">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="mailto:pavanivudatha2005@gmail.com" className="text-danger">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 text-center justify-content-center">
          <Col md={10} className="text-start p-4 bg-dark rounded shadow-lg">
            <h1 className="text-danger">About <span className="text-white">Me</span></h1>
            <h4 className='text-danger'>Student by Day, Developer by Passion!</h4>
            <p className='fs-5'>
              I'm Pavani Vudatha, a passionate web development and Artificial Intelligence enthusiast, always eager to learn and innovate. 
              As a student, I have explored various aspects of web development, from frontend design to backend functionality, ensuring seamless and engaging digital experiences.
            </p>
            <p className='fs-5'>
              I enjoy working on projects that challenge me to think creatively and solve real-world problems. My experience includes developing interactive dashboards, chatbots, and dynamic web applications.
            </p>
            <p className='fs-5'>
              Alongside my technical skills, my leadership experiences—like being a team lead and my role as School Pupil Leader—have helped me develop strong collaboration and problem-solving abilities.
              I am also a Reliance Foundation merit scholar and a Best Student Award recipient, which reflects my dedication to excellence. 
              With a keen eye for detail and a user-first approach, I strive to build intuitive and responsive web solutions. 
              Excited to keep learning, growing, and contributing to the world of technology!
            </p>
            <Button variant="danger" className="mt-3 m-3">More About Me</Button>
            <Button variant="danger" href={resume} className="mt-3 m-3" download>Resume</Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
