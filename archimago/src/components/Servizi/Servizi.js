import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";
import divano from "../../assets/divano.jpg";
import disegno from "../../assets/disegno.jpg";

function Servizi() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col
            lg={4}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-end"
          >
            <h1 className="font-face-Didot">SERVIZI</h1>
            <Image src={divano} id="divano" className="mt-3" />
          </Col>
          <Col lg={4} xs={6} className="pt-3 d-flex">
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
          <Col lg={4} xs={6} className="pt-3 d-flex">
            <p className="font-face-FuturaRenner destra">
              • Rilievi architettonici e topografici<br></br>• Progettazione
              integrata e direzione lavori<br></br>• Progettazione e
              realizzazione di impianti di produzione di energia da fonti
              rinnovabili<br></br>• Progettazione e realizzazione di interventi
              di restauro e risanamento conservativo<br></br>• Redazione di
              pratiche comunali/ASL/Soprintendenze Beni Architettonici e
              Ambientali, Artistiche e Archeologiche<br></br>• Architettura di
              interni<br></br>• Perizie tecniche e pratiche catastali<br></br>•
              Coordinamento per la sicurezza in fase di progettazione ed
              esecuzione delle opere (D.Lgs. 494/96 e 528/99)<br></br>•
              Adeguamenti normativi (prevenzione incendi, barriere
              architettoniche)<br></br>• Igiene e sicurezza sul lavoro(D.Lgs.
              626/94)<br></br>• Censimenti e mappature di patrimoni immobiliari
              di enti pubblici e privati
            </p>
          </Col>
          <Col
            lg={4}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-start"
          >
            <h1 className="font-face-Didot ">OFFERTA</h1>
            <Image src={disegno} id="disegno" className="mt-3" />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Servizi;
