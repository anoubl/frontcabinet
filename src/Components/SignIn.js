import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate from react-router-dom
import Navbar from './Navbar';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message ,setMessage]=useState('');
  const navigate = useNavigate();  // Initialize navigate for redirection

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

      if (response.data) {
        console.log("User is valid");
        // Assuming response.data contains the user role as 'Role'
        const userRole = response.data.rôle;

        // Redirect based on user role
        if (userRole === 1) {
          navigate('/admin');
        } else if (userRole === 0) {
          navigate('/Dashboard-inf');
        } else {
          console.log("Invalid user role");
        }
      } else {
        console.log("Invalid email or password");
      }

    } catch (error) {
     
      if (error.response && error.response.status === 400) {
       setMessage("Invalid email or password");
        // Handle the message or state to display the error to the user
      } else {
        console.log("An unexpected error occurred");
        // Handle other errors as needed
      }    }
  };

  return (
    <>
    <Navbar>

  
    <Container>
      <div className="mt-5 d-flex flex-column align-items-center">
        <h1>Sign in</h1>
        {message && <p className='text text-danger'>{message}</p>}
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
    </Navbar>
    </>
  );
}
