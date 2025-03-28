import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import ph1 from "../../assets/1p.jpg";
import ph2 from "../../assets/2p.jpg";
import ph3 from "../../assets/3p.jpg";
import ph4 from "../../assets/4p.jpg";
import ph5 from "../../assets/5p.jpg";
import ph6 from "../../assets/6p.jpg";
import ph7 from "../../assets/7p.jpg";
import ph8 from "../../assets/8p.jpg";
import ph9 from "../../assets/9p.jpg";
import ph10 from "../../assets/10p.jpg";
import ph11 from "../../assets/11p.jpg";
import ph12 from "../../assets/12p.jpg";
import ph13 from "../../assets/13p.jpg";
import ph14 from "../../assets/14p.jpg";
import ph15 from "../../assets/15p.jpg";

function Progetti() {
  useEffect(() => {
    document.title = "ARCHIMAGO | Progetti";
  }, []);

  return (
    <>
      <NavBar />

      <Container className="mb-5">
        <Row className="mt-5 d-flex justify-content-center">
          <Col lg={9} xs={12} className="p-3 d-flex colH1">
            <h1 className="font-face-Didot">PROGETTI</h1>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center rowProgetti">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto1" className="link">
              <Image src={ph1} id="ph1" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3 justify-self-center">
                ASILO NIDO ADRIANO OLIVETTI
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto2" className="link">
              <Image src={ph2} id="ph2" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                PISCINA COMUNALE MASSIMO RIVETTI
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto3" className="link">
              <Image src={ph3} id="ph3" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                SCUOLA MEDIA GIOVANNI FALCONE
              </h5>
            </Link>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center rowProgetti">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto4" className="link">
              <Image src={ph4} id="ph4" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                SCUOLA MEDIA GUIDO GOZZANO
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto5" className="link">
              <Image src={ph5} id="ph5" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                AREA ARCHEOLOGICA CASTELLO DI RIVOLI
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto6" className="link">
              <Image src={ph6} id="ph6" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                PLESSO SCOLASTICO GIOVANNI PAPINI
              </h5>
            </Link>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center rowProgetti">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto7" className="link">
              <Image src={ph7} id="ph7" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                PARROCCHIA SAN GIOVANNI E BARTOLOMEO
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto8" className="link">
              <Image src={ph8} id="ph8" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                APPARTAMENTO A TORINO
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto9" className="link">
              <Image src={ph9} id="ph9" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                PALAZZINA PLURIFAMILIARE
              </h5>
            </Link>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center rowProgetti">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto10" className="link">
              <Image src={ph10} id="ph10" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                VILLA INDIPENDENTE
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto11" className="link">
              <Image src={ph11} id="ph11" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                PALAZZINA UNIFAMILIARE
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto12" className="link">
              <Image src={ph12} id="ph12" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                EDIFICIO UNIFAMILIARE
              </h5>
            </Link>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center rowProgetti">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto13" className="link">
              <Image src={ph13} id="ph13" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                EDIFICIO CONDOMINIALE
              </h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto14" className="link">
              <Image src={ph14} id="ph14" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">CASA A SCHIERA</h5>
            </Link>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center progetto"
          >
            <Link to="/progetti/progetto15" className="link">
              <Image src={ph15} id="ph15" className="mt-3" />
              <h5 className="font-face-Didot-progetti mt-3">
                APPARTAMENTO A TORINO
              </h5>
            </Link>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetti;
