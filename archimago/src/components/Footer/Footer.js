import { Container, Navbar } from "react-bootstrap";
import "./styles.css";

function Footer() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-bottom" id="footer">
      <Container className="d-flex justify-content-end">
        <Navbar.Brand id="title">© 2025 by Alice Ibba</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;