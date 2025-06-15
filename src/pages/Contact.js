import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Form, Button,Alert } from 'react-bootstrap';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setSubmitted(true); // ✅ Show message after submit
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    }); // Optionally reset the form
  };

  return (
    <footer className="bg text-white py-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between">
        <div>
          <h2>Contact <span className="text-danger">Me!</span></h2>
          <p>If you have any project in your mind</p>
          <div>
            <p>You can reach me through the contact form provided on this website. Simply fill out the form with your name, email address, and message, and I will get back to you as soon as possible.</p>
            <p>Seethampeta</p>
            <p>Jangareddygudem, West Godavari</p>
            <p>Andhra Pradesh</p>
          </div>
          <div className="mb-4">
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
        </div>
        <div className="w-100 w-md-50">
        <Form className="bg-dark p-4 rounded w-100 w-md-50" onSubmit={handleSubmit}>
          {submitted && (
              <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
<<<<<<< HEAD
                ✅ Your message has been submitted successfully to pavani!
=======
                ✅ Your message has been submitted successfully!
>>>>>>> dfffede1b0f588a9d8a6149b6795cb2731bd489d
              </Alert>
            )}
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-dark text-light custom-placeholder"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-dark text-light custom-placeholder"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-dark text-light custom-placeholder"
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              placeholder="Your Idea"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-dark text-light custom-placeholder"
            />
          </Form.Group>

          <Button variant="danger" type="submit" className="w-100 btn">
            Send Message
          </Button>
        </Form>
      </div>
      </div>
    </footer>
  );
};

export default Contact;
