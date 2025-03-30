import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology",
      school: "Sri Vasavi Engineering College",
      year: "2022 - 2026",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSrit4wWk7M1Ru8y9sWiD_Z2DtV526ObNjA&s",
      description: "Computer Science and Artificial Intelligence"
    },
    {
      degree: "Intermediate",
      school: "Vikas Junior College",
      year: "2020 - 2022",
      img: "https://i0.wp.com/vidyavikasinstitutions.com/wp-content/uploads/2023/08/DSC_4241-scaled.jpg?fit=1024%2C684&ssl=1",
      description: "Maths, Physics, Chemistry"
    },
    {
      degree: "Secondary School",
      school: "Auxilium English Medium High School",
      year: "2018 - 2020",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3x-Z-pjyOB-m4hlXXBpxYsugXdxVkiuLnCg&s",
      description: "SSC Board"
    }
  ];

  return (
    <div className="education-section py-5">
      <Container>
        <h2 className="text-danger text-center mb-5">Education</h2>
        <Row className="justify-content-center">
          {educationData.map((edu, index) => (
            <Col md={6} key={index} className="mb-4">
              <Card className="bg-dark  text-white h-100 shadow border border-dark">
                <Card.Body>
                  <Card.Title className="text-danger">{edu.degree}</Card.Title>
                  <Card.Title className="mb-2 text-white">{edu.school}</Card.Title>
                  <img src={edu.img} alt={edu.school} className="img-fluid w-50 mb-3" />
                  <Card.Title className="text-white">{edu.year}</Card.Title>
                  <Card.Title className="text-white">{edu.description}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Education; 