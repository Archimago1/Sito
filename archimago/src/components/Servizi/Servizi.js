import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function Servizi() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col lg={4} xs={6} className="p-3 me-4 d-flex">
            <h1 className="font-face-Didot ">SERVIZI</h1>
          </Col>
          <Col lg={4} xs={6} className="p-3 d-flex">
            <p className="font-face-FuturaRenner">
              Lo studio <strong>Archimago</strong> nasce con l'intento di
              integrare esperienze professionali e specializzazioni acquisite da
              singoli professionisti per rispondere in modo esaustivo alle
              sempre più frequenti domande di prestazioni specialistiche e
              globalità di progetto. Inoltre, al di là delle conoscenze
              specifiche dei singoli componenti dell'associazione, lo studio
              Archimago, mediante collaborazioni avviate con realtà
              professionali legate anche alla progettazione impiantistica e
              strutturale, è in grado di operare professionalmente in relazione
              a incarichi di progettazione globale e integrata in ambito di
              grosse commesse pubbliche e private.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col lg={4} xs={6} className="p-3 me-4 d-flex">
            <h1 className="font-face-Didot ">OFFERTA</h1>
          </Col>
          <Col lg={4} xs={6} className="p-3 d-flex">
            <p className="font-face-FuturaRenner">
              <ul>
                <li>Rilievi architettonici e topografici</li>
                <li>Progettazione integrata e direzione lavori</li>
                <li>
                  Progettazione e realizzazione di impianti di produzione di
                  energia da fonti rinnovabili
                </li>
                <li>
                  Progettazione e realizzazione di interventi di restauro e
                  risanamento conservativo
                </li>
                <li>
                  Redazione di pratiche comunali/ASL/Soprintendenze Beni
                  Architettonici e Ambientali, Artistiche e Archeologiche
                </li>
                <li>Architettura di interni</li>
                <li>Perizie tecniche e pratiche catastali</li>
                <li>
                  Coordinamento per la sicurezza in fase di progettazione ed
                  esecuzione delle opere (D.Lgs. 494/96 e 528/99)
                </li>
                <li>
                  Adeguamenti normativi (prevenzione incendi, barriere
                  architettoniche)
                </li>
                <li>Igiene e sicurezza sul lavoro(D.Lgs. 626/94)</li>
                <li>
                  Censimenti e mappature di patrimoni immobiliari di enti
                  pubblici e privati
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Servizi;
