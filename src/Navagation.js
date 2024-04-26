import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Project from './Project';
import Home from './Home';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes,Route, Link } from 'react-router-dom';
const Navagation = () => {
  return (
   <Container>
     <Col><h1>NAVEEN</h1></Col>
  <Col><h3  className='lnk'>
    <div className='a'>
    <Navbar expand="lg" className="bg-body-ter">
     
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="project">Home</Link>
           <Link to="home">about</Link>
          </Nav> 
          <Routes>
            <Route path='home' element={<Home/>} />
            <Route path='project' element={<Project/>} />
          </Routes>
        </Navbar.Collapse>
     
    </Navbar>
    </div>
    </h3></Col>
   </Container>
  )
}

export default Navagation