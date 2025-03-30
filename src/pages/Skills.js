import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faTools, faCloud, faCogs, faBrain } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  const skillsData = [
    {
      category: "Programming Languages",
      icon: faCode,
      skills: ["Java", "C", "Python"]
    },
    {
      category: "Web Technologies",
      icon: faCode,
      skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "React.js"]
    },
    {
      category: "Developer Tools",
      icon: faTools,
      skills: ["VS Code", "Git", "GitHub"]
    },
    {
      category: "Frameworks",
      icon: faCogs,
      skills: ["Django", "Flask"]
    },
    {
      category: "Cloud/Databases",
      icon: faCloud,
      skills: ["AWS", "MySQL"]
    },
    {
      category: "Core Skills",
      icon: faDatabase,
      skills: ["Data Structures and Algorithms", "Competitive Coding", "Object Oriented Programming", "DBMS", "Networking", "Operating System"]
    },
    {
      category: "Areas of Interest",
      icon: faBrain,
      skills: ["Machine Learning and AI", "Web Development (Full-Stack)", "Automation and Web Scraping", "Cloud Computing"]
    }
  ];

  return (
    <div className="skills-section py-5 bg-dark text-white">
      <Container>
        <h2 className="text-danger text-center mb-5">Technical Skills & Interests</h2>
        <Row>
          {skillsData.map((group, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="bg-dark text-white fs-5 p-3 shadow-lg">
                <Card.Body>
                  <h4 className="text-danger mb-3">
                    <FontAwesomeIcon icon={group.icon} className="me-2" />
                    {group.category}
                  </h4>
                  <ul className="list-unstyled">
                    {group.skills.map((skill, i) => (
                      <li key={i} className="mb-2">• {skill}</li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Skills;
