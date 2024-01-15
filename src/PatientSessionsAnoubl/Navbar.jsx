

import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

import React, { Children } from 'react'
import { Grid } from '@mui/material';
function NavbarPatient(props) {
   
  return (
    <>
    <Navbar bg="primary" expand="lg">
    <Navbar.Brand as={Link} href="https://flowbite-react.com">
    <img src="/Images/favicon.png" style={{width:"50px"}} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="mx-auto justify-content">
    <Link className='nav-link text-dark' to="/ListRendezVous-Patient">Les Rendez-vous</Link>
    <Link className='nav-link text-dark' to="/Folder-Patient">Dossier Médical</Link>
    <Link className='nav-link text-dark' to="/">Déconnexion</Link>
  </Nav>
</Navbar.Collapse>

  </Navbar>
        <Container className='mt-4' maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {props.children}
            </Grid>
          </Container>

    </>
  
  )
}

export default NavbarPatient