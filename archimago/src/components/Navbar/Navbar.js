import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.jpg";
import "./styles.css";

function NavBar() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary sticky-top font-face-FuturaRennerNavbar"
      id="navbar"
    >
      <Container>
        <Navbar.Brand href="/home">
          <img className="blog-navbar-brand" alt="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/servizi">Servizi</Nav.Link>
            <Nav.Link href="/progettoCasa">Progetto Casa</Nav.Link>
            <Nav.Link href="/progetti">Progetti</Nav.Link>
            <Nav.Link href="/team">Team</Nav.Link>
            <Nav.Link href="/contatti">Contatti</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
