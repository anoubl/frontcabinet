import React, { useState } from "react";


import { Form, Button, Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter le formulaire (envoyer un e-mail, etc.)
    console.log("Nom:", name);
    console.log("E-mail:", email);
    console.log("Message:", message);
    // Réinitialiser les champs après soumission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
    <Navbar>
 
    <div className="contact-section" data-aos="fade-up" data-aos-duration="1000">
      <h2 className="section-title">Contactez-nous</h2>
      
      <Form onSubmit={handleSubmit} className="contact-form">
        <Row>
          <Col xs={6}>
            <Form.Group controlId="formName">
              <Form.Label>Nom:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Votre nom"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
          <Col xs={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Votre e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Votre message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Envoyer
        </Button>
      </Form>
    </div>
         
    </Navbar>
    </>
  );
};

export default Contact;
