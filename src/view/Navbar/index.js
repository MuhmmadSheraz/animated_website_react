import React from "react";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  Container,
} from "react-bootstrap";
import "./navbar.css";

const NavbarHeader = () => {
  return (
    <div className="p-2">
      <Navbar collapseOnSelect expand="lg" bg="transparent">
        <Navbar.Brand href="#home">
          <img src="https://mutify.app/images/mutify-logo-6ab64e5ad7.png" />
          <span className="display-5 navBrand mx-3 colorBrand">MUTIFY</span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="m-auto text-center justify-content-center navLink ">
            <Nav.Link className="navLink px-4" href="#home">
              Works With
            </Nav.Link>
            <Nav.Link className="navLink px-4" href="#features">
              Noise Level
            </Nav.Link>
            <Nav.Link className="navLink px-4" href="#pricing">
              Switch Device
            </Nav.Link>
            <Nav.Link className="navLink px-4" href="#pricing">
              Feedback
            </Nav.Link>
          </Nav>
          <Form inline className="btn">
            <Button className="downloadBtn">Download</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default NavbarHeader;
