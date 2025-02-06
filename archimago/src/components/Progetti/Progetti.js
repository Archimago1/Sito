import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

import { Container, Row, Col, Image, Button, Stack } from "react-bootstrap";
import "./styles.css";

import ph1 from "../../assets/1p.jpg";
import ph2 from "../../assets/2p.jpg";
import ph3 from "../../assets/3p.jpg";
import ph4 from "../../assets/4p.jpg";
import ph5 from "../../assets/5p.jpg";
import ph6 from "../../assets/6p.jpg";

function Progetti() {
  return (
    <>
      <NavBar />

      <Container>
        <Row className="mt-5 d-flex">
          <Col lg={4} xs={6} className="p-3 me-4 d-flex">
            <h1 className="font-face-Didot">PROGETTI</h1>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Image src={ph1} id="ph1" className="mt-3" />
            <h5 className="font-face-Didot-progetti mt-3">
              ASILO NIDO ADRIANO OLIVETTI
            </h5>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Image src={ph2} id="ph2" className="mt-3" />
            <h5 className="font-face-Didot-progetti mt-3">
              PISCINA COMUNALE MASSIMO RIVETTI
            </h5>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Image src={ph3} id="ph3" className="mt-3" />
            <h5 className="font-face-Didot-progetti mt-3">
              SCUOLA MEDIA GIOVANNI FALCONE
            </h5>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Image src={ph4} id="ph4" className="mt-3" />
            <h5 className="font-face-Didot-progetti mt-3">
              SCUOLA MEDIA GUIDO GOZZANO
            </h5>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Image src={ph5} id="ph5" className="mt-3" />
            <h5 className="font-face-Didot-progetti mt-3">
              AREA ARCHEOLOGICA CASTELLO DI RIVOLI
            </h5>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Image src={ph6} id="ph6" className="mt-3" />
            <h5 className="font-face-Didot-progetti mt-3">
              PLESSO SCOLASTICO GIOVANNI PAPINI
            </h5>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetti;
