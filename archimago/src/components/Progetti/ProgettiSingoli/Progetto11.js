import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import PH1 from "../../../assets/11-1.jpg";
import PH2 from "../../../assets/11-2.jpeg";
import PH3 from "../../../assets/11-3.jpeg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto11() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavBar />

      <Container className="mb-5">
        <Row className="mt-5 d-flex justify-content-center">
          <Col lg={9} xs={6} className="p-3 d-flex justify-content-center">
            <h1 className="font-face-Didot h1ProgettoPiccolo">
              PALAZZINA UNIFAMILIARE
            </h1>
          </Col>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHERE</h5>
            <p className="font-face-FuturaRenner p-progetto">Alpignano</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2022</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Interventi di manutenzione straordinaria - <br></br>Progetto e
              realizzazione
            </p>
          </Col>
        </Row>

        <Row className="my-5 d-flex justify-content-center">
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            id="carousel"
            data-bs-theme="dark"
            interval={null}
          >
            <Carousel.Item>
              <Image src={PH1} id="pc1" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio prima dell'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio durante l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto prevedeva un intervento mirato all’efficientamento
            energetico dell’edificio, attraverso soluzioni innovative per
            l’isolamento termico e l’ottimizzazione degli impianti.<br></br>
            <hr></hr>
            Per ridurre le dispersioni di calore e migliorare le prestazioni
            energetiche complessive, è stato realizzato un cappotto esterno in
            EPS sulle superfici opache verticali. Questo sistema isolante
            consentirà di incrementare il comfort abitativo, mantenendo
            temperature più stabili all’interno dell’edificio e riducendo il
            fabbisogno energetico per il riscaldamento e il raffrescamento. A
            supporto di questa strategia, è stato applicato un isolante XPS alle
            superfici opache orizzontali, migliorando ulteriormente l’efficienza
            termica e garantendo un migliore isolamento delle superfici
            orizzontali esposte a escursioni termiche significative.<br></br>
            <hr></hr>
            Per una gestione più efficace dell’irraggiamento solare e della luce
            naturale, sono state installate schermature solari e chiusure
            oscuranti, utili per prevenire il surriscaldamento estivo e
            migliorare il comfort degli ambienti interni. Questi dispositivi
            permetteranno di ridurre la necessità di climatizzazione nei mesi
            più caldi, contribuendo così a un ulteriore risparmio energetico.
            <br></br>
            <hr></hr>
            Infine, per garantire un sistema di riscaldamento efficiente e
            sostenibile, è stata installata una caldaia a condensazione. Questo
            tipo di generatore, rispetto alle caldaie tradizionali, consente di
            recuperare il calore dei fumi di scarico, riducendo i consumi di
            combustibile e le emissioni inquinanti.
            <br></br>
            <hr></hr>
            Nel complesso, questi interventi miglioreranno le prestazioni
            energetiche dell’edificio, riducendo i costi di gestione e
            aumentando il livello di comfort abitativo, con un approccio
            sostenibile e allineato alle moderne esigenze di efficienza.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto11;
