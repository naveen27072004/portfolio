import React from 'react'
import './Head.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Routes,Route, Link } from 'react-router-dom';
import Project from './Project';
const Home = () => {
  return (
   <div className="head">
    <Container>
    <div className="stcky text-muted">
<Row>
  
  <Col><h1>NAVEEN</h1></Col>
  <Col><h3  className='lnk'>
    <div className='a'>
    <Navbar expand="lg" className="bg-body-ter">
     
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           <Link to="project">Home</Link>
          </Nav>
          <Routes>
            <Route path='home' element={<Home/>} />
            <Route path='project' element={<Project/>} />
          </Routes>
        </Navbar.Collapse>
     
    </Navbar>
    </div>
    </h3></Col>
    <Col><button className='btn'><h4>Contact</h4></button></Col>
</Row>
</div>
<div className="con">
<Row>
  <Col><h2 className='hello'><span>hellow...!🖖</span><br /> I am-ForntEnd-ReactDeveloper</h2><br />
<h5><a href=""></a></h5>
  </Col>
  <Col>
  <Image fluid className='myimg' width={'500px'} height={'400px'} src={require("./assets/mypic.jpg")  } roundedCircle></Image>
  </Col>
</Row>
<Row>
  <Col>
  
  <Image fluid className='skill' src={require("./assets/download.png")} roundedCircle width={"40px"} height={"40px"}></Image>
  <Image fluid className='skill' src={require("./assets/css.png")} roundedCircle width={"40px"} height={"40px"}></Image>
  <Image fluid className='skill' src={require("./assets/boot.jpg")} roundedCircle width={"40px"} height={"40px"}></Image>
  <Image fluid className='skill' src={require("./assets/js.png")} roundedCircle width={"40px"} height={"40px"}></Image>
  <Image fluid className='skill' src={require("./assets/react.png")} roundedCircle width={"40px"} height={"40px"}></Image>

  </Col>

</Row>
</div>
    </Container>
   </div>
  )
}

export default Home