import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const GalleryComp = () => {

  const galleryImages = [
    'person1.jpg',
    'person1.jpg',
    'person1.jpg',
    'person1.jpg',
    'person1.jpg',
    'person1.jpg',
    'logo192.png',
    'logo512.png',
    'person1.jpg',
  ];

  return (
    <div >
      <Container className="text-center mt-5">
        <h2 className='fixed-header section-title'>גלריה</h2>
        <p  style={{color:"grey"}}>על העבודה שלנו</p>
        <Row>
          {galleryImages.map((imgSrc, index) => (
            <Col key={index} xs={12} sm={6} md={4} className="mb-4">
              <Card>
                <Card.Img variant="top" src={imgSrc} alt={`Gallery image ${index + 1}`} />
              </Card>
            </Col>
          ))}
        </Row>
      </Container>    </div>
  )
}

export default GalleryComp
