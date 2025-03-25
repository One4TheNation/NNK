import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function AboutPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Header as="h1">About Us</Card.Header>
            <Card.Body>
              <Card.Title>Our Mission</Card.Title>
              <Card.Text>
                We are a passionate team dedicated to creating amazing web
                experiences using Vite, React, and Bootstrap.
              </Card.Text>
              <h4 className="mt-4">Key Features:</h4>
              <ul>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>Vite
                  Development
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Responsive Design
                </li>
                <li>
                  <i className="bi bi-check-circle text-success me-2"></i>
                  Bootstrap Integration
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
