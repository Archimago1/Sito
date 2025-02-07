import { Container, Navbar, Col } from "react-bootstrap";
import "./styles.css";

function Footer() {
  const currentYear = new Date().getFullYear(); // Si ottiene l'anno corrente

  return (
    <Navbar expand="lg" className="bg-body-tertiary" id="footer">
      <Container className="d-flex flex-column justify-content-center">
        <Navbar.Brand id="title" className="font-face-FuturaRennerFooter">
          <strong>Archimago Srl</strong>
        </Navbar.Brand>
        <p className="font-face-FuturaRenner footer-bianco">
          P.IVA: 10147120017<br></br>ⓒ{currentYear}
          <br></br>
          All rights reserved<br></br>
          Site by Alice Ibba
        </p>
        <Col>
          <a
            href="https://www.instagram.com/archimago_progettocasa/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-instagram"></i>
          </a>
          <a
            href="https://www.facebook.com/people/Archimago-Progetto-Casa/100070568525104/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="bi bi-facebook"></i>
          </a>
        </Col>
      </Container>
    </Navbar>
  );
}

export default Footer;
