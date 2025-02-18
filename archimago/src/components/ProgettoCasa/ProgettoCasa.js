import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import logoPC from "../../assets/logo2.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";
import ML1 from "../../assets/mini-logo1.jpg";
import ML2 from "../../assets/mini-logo2.jpg";
import ML3 from "../../assets/mini-logo3.jpg";

function ProgettoCasa() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col>
            <h3 className="font-face-FuturaRennerProgetti h3PC">
              Immagina la casa dei tuoi sogni...<br></br>
              <strong>Archimago Progetto Casa</strong> la realizza per te!
            </h3>
          </Col>
          <Col
            lg={4}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            id="photo1"
          >
            <Image
              src={logoPC}
              id="logoPC"
              className="align-self-center justify-self-center mt-5"
            />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col
            lg={3}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-center"
          >
            <Image src={ML1} id="ML1" className="" />
            <h4 className="font-face-FuturaRennerProgetti h4PC">
              <strong>Servizio di Progettazione</strong>
            </h4>
            <p className="pPC">
              Un nostro <strong>architetto</strong> segue tutte le fasi del tuo
              progetto casa, assicurandoti un{" "}
              <strong>servizio di consulenza completo</strong> su qualunque
              problematica di natura edile, fiscale, normativa e curando per te
              tutte le pratiche per ottenere i{" "}
              <strong>benefici fiscali </strong>
              previsti dalle norme attuali.
            </p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-center"
          >
            <Image src={ML2} id="ML2" className="" />
            <h4 className="font-face-FuturaRennerProgetti h4PC">
              <strong>Fornitura di Materiali e Arredo</strong>
            </h4>
            <p className="pPC">
              Forniamo <strong>materiali</strong> e <strong>arredi</strong> per
              la tua casa: mobili e complementi, pavimenti e rivestimenti di
              ogni tipo, sistemi di illuminazione, infissi, arredo bagno e tanto
              altro. <strong>Progettiamo</strong> e{" "}
              <strong>realizziamo su misura</strong> elementi per ogni ambiente
              con <strong>materiali ecocompatibili</strong> e a{" "}
              <strong>Km O</strong>.
            </p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-center"
          >
            <Image src={ML3} id="ML3" className="" />
            <h4 className="font-face-FuturaRennerProgetti h4PC">
              <strong>Opere di Ristrutturazione</strong>
            </h4>
            <p className="pPC">
              Rendiamo <strong>semplice</strong>, <strong>veloce</strong> ed{" "}
              <strong>economico</strong> anche il progetto più complesso.
              Gestiamo personalmente ogni <strong>opera di costruzione </strong>
              occupandoci del <strong>rispetto dei tempi</strong> e del corretto
              andamento dei lavori. Curiamo direttamente{" "}
              <strong>tutte le realizzazioni</strong> sia di tipo edile che
              impiantistico.
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default ProgettoCasa;
