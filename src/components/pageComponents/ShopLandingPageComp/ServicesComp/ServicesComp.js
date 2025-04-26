import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const ServicesComp = () => {
  const features = [
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
      icon: 'person1.jpg' // Replace with your actual icon path
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
      icon: 'path/to/your/icon2.png' // Replace with your actual icon path
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi -in tempus eleifend pellentesque natoque etiam.',
      icon: 'path/to/your/icon3.png' // Replace with your actual icon path
    },
    {
      title: 'Lorem ipsum',
      description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
      icon: 'path/to/your/icon4.png' // Replace with your actual icon path
    },
  ];

  return (
    <Container className="text-center mt-5">
      <h2 className='fixed-header section-title'>שירותים שלנו</h2>
      <Row className="justify-content-center">
        {features.map((feature, index) => (
          <Col key={index} xs={12} sm={6} md={3} className="mb-4">
            <Card className="feature-card">
              <Card.Img variant="top" src={feature.icon} className="feature-icon" />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServicesComp;
