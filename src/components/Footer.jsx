import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    padding: '40px 0',
    marginTop: '40px',
    fontSize: '14px',
  };

  const headingStyle = {
    fontWeight: 'bold',
    marginBottom: '15px',
  };

  const linkStyle = {
    display: 'block',
    color: '#ffffff',
    textDecoration: 'none',
    marginBottom: '8px',
  };

  const bottomBarStyle = {
    textAlign: 'center',
    paddingTop: '20px',
    borderTop: '1px solid #444',
    marginTop: '20px',
    fontSize: '13px',
    color: '#aaa',
  };

  return (
    <footer style={footerStyle}>
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5 style={headingStyle}>Vibe Kart</h5>
            <p>Your go-to destination for the trendiest products online. Affordable, reliable, and just a click away.</p>
          </Col>
          <Col md={4} sm={6}>
            <h5 style={headingStyle}>Quick Links</h5>
            <a href="/about" style={linkStyle}>About Us</a>
            <a href="/contact" style={linkStyle}>Contact</a>
            <a href="/privacy" style={linkStyle}>Privacy Policy</a>
            <a href="/terms" style={linkStyle}>Terms & Conditions</a>
          </Col>
          <Col md={4} sm={6}>
            <h5 style={headingStyle}>Contact</h5>
            <p>Email: support@vibekart.com</p>
            <p>Phone: +91-8894659888</p>
            <p>Address: New Delhi, India</p>
          </Col>
        </Row>
        <Row>
          <Col style={bottomBarStyle}>
            &copy; {currentYear} Vibe Kart. All rights reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
