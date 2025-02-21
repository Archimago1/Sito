import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

function Contatti() {
  useEffect(() => {
    document.title = "ARCHIMAGO | Contatti";
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col
            lg={4}
            xs={12}
            className="p-3 me-4 d-flex flex-column align-items-lg-end"
          >
            <h1 className="font-face-Didot">CONTATTI</h1>
            <p className="font-face-FuturaRenner d-flex flex-column align-items-lg-end parContatti">
              <span>
                <strong>Archimago Srl</strong>
              </span>
              <br></br>
              <span>Via Rossetti, 11 - 10154 Torino</span>
              <br></br>
              <span>P.IVA: 10147120017</span>
              <br></br>
              <span>Tel.: +39 011.4186052</span>
              <br></br>
              <span>E-mail: info@archimago.net</span>
            </p>
          </Col>
          <Col lg={4} xs={12} className="p-3 d-flex">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5633.4363960027695!2d7.713525276590728!3d45.09150735822773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4788727117a0efb7%3A0x544f434deccf7e4c!2sArchimago%20srl!5e0!3m2!1sit!2sit!4v1738683484957!5m2!1sit!2sit"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Mappa di Archimago srl"
            ></iframe>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Contatti;
