import React from 'react'
import { Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import './Head.css'
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
const About = () => {
  return (
    <Container>
      <div className="abt">
      <Row><center><h1 className='abth1'>About-mySelf</h1></center></Row>
        <Row>
            <Col>
            <CardGroup>
      <Card>
        <Card.Img variant="top" src={require("./assets/emoj.jpg")} height={"200px"} />
        <Card.Body>
          <Card.Title>School</Card.Title>
          <Card.Text>
            10th CGPA=57% <br /> 12th CGPA=60%
            <br />
            As T am a major of 12th is <span>COMMERCE AND COMPUTER APPLICATION</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <marquee behavior="" direction=""> <small className="text-muted">Scroll Down⏬</small></marquee>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("./assets/emj2.jpg")} height={"200px"} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
           As I am completed underGradute on Sree SarswathiThyaga Raja Collage major of <span>Bacholer of COMMERCE and COMPUTERAPPLICATION
            <br />
            CGPA=55%
            </span> <br />

          </Card.Text>
        </Card.Body>
        <Card.Footer>
        <marquee behavior="" direction=""> <small className="text-muted">Scroll Down⏬</small></marquee>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={require("./assets/emj3.png")} height={"200px"}/>
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
         <marquee behavior="" direction=""> <small className="text-muted">Scroll Down⏬</small></marquee>
        </Card.Footer>
      </Card>
    </CardGroup>
     
            </Col>
        </Row>
        </div>
    </Container>
  )
}

export default About