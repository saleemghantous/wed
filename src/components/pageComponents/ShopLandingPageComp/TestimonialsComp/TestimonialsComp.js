import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const TestimonialsComp = () => {
  const testimonials = [
    {
      name: 'סלים גנטוס',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
      imgSrc: 'user.png' // Replace with your actual image path
    },
    {
      name: 'Johnathan Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
      imgSrc: 'user.png' // Replace with your actual image path
    },
    {
      name: 'Jane Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
      imgSrc: 'user.png' // Replace with your actual image path
    },
    {
      name: 'Jane Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
      imgSrc: 'user.png' // Replace with your actual image path
    },
    {
      name: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
      imgSrc: 'user.png' // Replace with your actual image path
    },
    {
      name: 'Johnathan Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
      imgSrc: 'user.png' // Replace with your actual image path
    },
  ];

  return (
    <Container className="text-center mt-5" dir='rtl'>
      <h5 className='fixed-header section-title'>מה הלוקחות שלנו אומרים עלינו</h5>
      <Row className="justify-content-center">
        {testimonials.map((testimonial, index) => (
          <Col key={index} xs={12} sm={6} md={4} className="mb-4">
            <Card className="testimonial-card">
              <Card.Body style={{textAlign:"right"}}>
                <Card.Img variant="top" src={testimonial.imgSrc} className="testimonial-img" style={{border:"solid 1px black"}} />
                <Card.Text className="testimonial-text">"{testimonial.text}"</Card.Text>
                <Card.Title className="testimonial-name">- {testimonial.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TestimonialsComp;
