import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import NNKLogo from "../Image/NNKVariations-12.svg";

const NNKHeader = () => {
  return (
    <Navbar expand="lg" className="bg-white py-4">
      <Container className="position-relative">
        {/* Left-side logo */}
        <Navbar.Brand
          href="/"
          className="position-absolute start-0 text-secondary fw-bold"
        >
          <div className="pt-2">
            <img src={NNKLogo} alt="Logo" height={100} width={150} />
          </div>
        </Navbar.Brand>

        {/* Centered Navigation */}
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-center"
        >
          <Nav className="py-2">
            <Nav.Link href="/" className="mx-2">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="mx-2">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="mx-2">
              Services
            </Nav.Link>
            <Nav.Link href="/blog" className="mx-2">
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" className="mx-2">
              Contact
            </Nav.Link>
            <Nav.Link href="/pages" className="mx-2">
              Pages
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {/* Right-side search
        <div className="position-absolute end-0 pt-2">
          <input
            type="text"
            placeholder="Search..."
            className="form-control"
            style={{ width: "150px" }}
          />
        </div> */}

        {/* Mobile Toggle - moved below the search to avoid overlap */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="position-absolute end-0 mt-5"
        />
      </Container>
    </Navbar>
  );
};

export default NNKHeader;
