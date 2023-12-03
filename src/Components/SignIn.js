import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await axios.post("https://localhost:7184/api/Users/login", {
        Email: email,
        Password: password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };
  
  return (
    <Container>
      <div className="mt-5 d-flex flex-column align-items-center">
        <h1>Sign in</h1>
        <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3">
            Sign In
          </Button>
        </Form>
      </div>
    </Container>
  );
}
