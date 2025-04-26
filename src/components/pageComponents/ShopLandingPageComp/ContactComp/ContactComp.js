import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import MapIcon from '@mui/icons-material/Map';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';


const ContactComp = ({ }) => {
  return (
    <div >
      <Container  className="contact-form-container">
        <Row style={{ width: "100%" }} className="justify-content-center">

          <Col md={12} sm={12} xl={12} className="text-center contact-info">
            <h4></h4>
            <p>
              <FacebookIcon />
              <InstagramIcon />
              <YouTubeIcon/>
            </p>
            <hr style={{ marginRight: "25px" }} />
            <p>
              +1 123 456 1234
              <LocalPhoneIcon />
            </p>
            <p>
              4321 California St, San Francisco, CA 12345
              <LocationOnIcon />
            </p>

            <p>
              info@company.com
              <EmailIcon />
            </p>

          </Col>
        </Row>
      </Container>
      <br />
    </div>
  )
}

export default ContactComp
