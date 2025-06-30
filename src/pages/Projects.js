import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website highlighting my skills and projects.",
      technologies: ["HTML", "CSS", "JavaScript", "React.js", "Remix Icons", "Responsive Web Design"],
      image: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg",
      github: "https://github.com/pavanivudatha/PavaniPortFolio",
      live: " https://pavanivudatha.github.io/PavaniPortFolio/"
    },
    {
      title: "Amazon Clone - E-commerce Web Application",
      description: "An E-commerce web application simulating core features of Amazon.",
      technologies: ["React.js", "React Router", "PHP", "Bootstrap", "HTML", "CSS", "JavaScript", "REST APIs"],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEogSSKkBKOKH2KhbaylSGFAvGbwoYotGSHg&s",
      github: "https://github.com/pavanivudatha/Amazon_Clone",
      live: " https://pavanivudatha.github.io/Amazon_Clone/"
    },
    {
      title: "ChatBot For College Website",
      description: "A chatbot designed to assist students with admissions and general information.",
      technologies: ["Chatbase", "NLP", "API integration", "HTML", "CSS", "Web Embedding"],
      image: "https://www.ismartrecruit.com/upload/blog/main_image/recruitment_chatbot_definition_features_and_benefits.webp",
      github: "https://github.com/pavanivudatha/ChatBot",
      live: "https://pavanivudatha.github.io/ChatBot/"
    },
    {
      title: "Gold Price Predictor",
      description: "A web application that predicts future gold prices using historical data and Bayesian modeling",
      technologies: ["Flask", "React.js", "Plotly","time-series forecasting model(prophet)","API integration(GoldAPI)", "React.js","Bootstrap", "HTML","CSS"],
      image: "https://images.herzindagi.info/her-zindagi-english/images/2024/10/30/article/image/Main-(39)-1730273079745.jpg",
      github: "https://github.com/pavanivudatha/GoldPricePred",
      live: "https://gold-price-pred.vercel.app/"
    },
    {
      title: "AI Text-to-Image Generator",
      description: "Developed a full-stack web application that converts natural language prompts into AI-generated images using OpenAI's DALL-E model.",
      technologies: ["React.js", "Node.js", "Express.js", "OpenAI API",' Cloudinary', "Styled Components","Axios"],
      image: "https://pplx-res.cloudinary.com/image/fetch/s--kZuOOUL4--/t_limit/https://hotpot.ai/images/site/blog/dall_e_2.webp",
      github: "https://github.com/pavanivudatha/ai-text-to-image-generator",
      live: "https://ai-text-to-image-generator-seven.vercel.app/"
    }
  ];

  return (
    <div className="projects-section py-5 bg-dark text-white">
      <Container>
        <h2 className="text-danger text-center mb-5">Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="bg-dark text-white h-100 p-3 shadow-lg">
                <Card.Img variant="top" src={project.image} />
                <Card.Body>
                  <Card.Title className="text-danger">{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <div className="mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="badge bg-dark me-2">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-danger">
                      <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-danger">
                      <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                    </a>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
