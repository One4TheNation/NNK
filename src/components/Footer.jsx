import React from "react";
import { Container } from "react-bootstrap";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-auto">
      <Container>
        <p className="mb-0">
          <i className="bi bi-heart-fill text-danger me-2"></i>© 2024 My Vite
          React Bootstrap App
        </p>
      </Container>
    </footer>
  );
}

export default Footer;
