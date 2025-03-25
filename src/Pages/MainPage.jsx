import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function MainPage() {
  return (
    <Container className="mt-5">
      <Row>
        <Col md={8} className="mx-auto">
          <Card>
            <Card.Header as="h1">Welcome to My Vite React App</Card.Header>
            <Card.Body>
              <Card.Title>Explore Our Features</Card.Title>
              <Card.Text>
                This is a starter template using Vite, React Bootstrap, and
                React Router. Customize this page to fit your needs.
              </Card.Text>
              <Button variant="primary" className="me-2">
                <i className="bi bi-play-circle me-2"></i>
                Get Started
              </Button>
              <Button variant="outline-secondary">
                <i className="bi bi-info-circle me-2"></i>
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MainPage;
