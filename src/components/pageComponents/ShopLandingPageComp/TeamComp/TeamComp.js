import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';

const TeamComp = ({ }) => {

  const teamMembers = [
    {
      name: 'אדם אדם',
      title: 'נמהל העסק',
      imgSrc: 'person1.jpg',
    },
    {
      name: 'אדם אדם',
      title: 'איש תכני',
      imgSrc: 'person1.jpg',
    },
    {
      name: 'Jane Doe',
      title: 'Senior Designer',
      imgSrc: 'person1.jpg',
    },
    {
      name: 'Karen Doe',
      title: 'Project Manager',
      imgSrc: 'person1.jpg',
    },
  ];

  return (
    <div>
      <Container className="text-center mt-5">
        <h2 className='fixed-header section-title'>הצוות שלנו</h2>
        <p style={{color:"grey"}}>צוות מקצועי שנותן את השירות במסירות, ותמיד אבל תמיד עושה את זה באהבה</p>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col key={index} xs={12} sm={6} md={3} className="mb-4">
              <Card style={{ border: "0px" }}>
                <Card.Img variant="top" src={member.imgSrc} alt={member.name} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Text>{member.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default TeamComp
