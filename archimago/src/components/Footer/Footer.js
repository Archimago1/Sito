import { Container, Navbar } from "react-bootstrap";
import "./styles.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Si ottiene l'anno corrente

  return (
    <Navbar expand="lg" className="bg-body-tertiary sticky-bottom" id="footer">
      <Container className="d-flex justify-content-end">
        <Navbar.Brand id="title">
          Archimago srl | P.IVA 10147120017 | © {currentYear} | All rights
          reserved | Site by Alice Ibba
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Footer;
