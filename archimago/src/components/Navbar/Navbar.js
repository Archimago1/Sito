import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../assets/logo.jpg";
import "./styles.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary sticky-top font-face-FuturaRennerNavbar"
      id="navbar"
    >
      <Container className="d-flex flex-row" id="container">
        <Navbar.Brand href="#home" className=" d-flex flex-start">
          <img className="blog-navbar-brand" alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex flex-end">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/servizi">Servizi</Nav.Link>
            <Nav.Link href="/progetti">Progetti</Nav.Link>
            <NavDropdown title="Team" id="basic-nav-dropdown">
              <NavDropdown.Item href="/amione">
                Paola Serena <strong>AMIONE</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="/faienza">
                Alfonso <strong>FAIENZA</strong>
              </NavDropdown.Item>
              <NavDropdown.Item href="/politano">
                Cristina <strong>POLITANO</strong>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contatti">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
