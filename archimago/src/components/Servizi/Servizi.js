import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

import { Container, Row, Col, Image, Button, Stack } from "react-bootstrap";
import "./styles.css";

function Servizi() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="mt-5 mb-5">
          <Col lg={4} xs={6} className="p-3 d-flex">
            <h1 className="font-face-Cinzel">SERVIZI</h1>
          </Col>
          <Col lg={4} xs={6} className="p-3 d-flex">
            <p>
              Lo studio Archimago nasce con l'intento di integrare esperienze
              professionali e specializzazioni acquisite da singoli
              professionisti per rispondere in modo esaustivo alle sempre più
              frequenti domande di prestazioni specialistiche e globalità di
              progetto. Inoltre, al di là delle conoscenze specifiche dei
              singoli componenti dell'associazione, lo studio Archimago,
              mediante collaborazioni avviate con realtà professionali legate
              anche alla progettazione impiantistica e strutturale, è in grado
              di operare professionalmente in relazione a incarichi di
              progettazione globale e integrata in ambito di grosse commesse
              pubbliche e private.
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Servizi;
