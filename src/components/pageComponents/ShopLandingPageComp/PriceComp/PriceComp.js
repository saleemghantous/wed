import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './PriceComp.css'


const PriceComp = () => {
    const items = [
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsumipsumipsumipsumipsumipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
        {
            title: 'Lorem ipsum',
            description: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
            icon: 'person1.jpg' // Replace with your actual icon path
        },
    ];

    return (
        <Container className="text-center mt-5">
            <h2 className='fixed-header section-title'>מחירים</h2>
            <Row className="justify-content-center">
                {items.map((feature, index) => (
                    <Col key={index} xs={12} sm={6} md={3} className="mb-4">
                        <Card className="feature-card">
                            <span style={{ margin: "1px", border: "red solid 1px", borderRadius: "9px", backgroundColor: "white", color: "red", textAlign: "right", position: "absolute", padding: "2px" }}>מבצע</span>

                            <Card.Img variant="top" src={feature.icon} className="feature-icon" />
                            <Card.Body>
                                <Card.Title className='mb-5'>{feature.title}</Card.Title>
                                <div className='d-flex justify-content-between'>
                                    <div style={{ textAlign: "left" }}></div>
                                    <div className='d-flex'>
                                        <div className='mx-2'>126$</div>
                                        <div >126$</div>
                                    </div>
                                </div>
                            </Card.Body>

                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default PriceComp;
