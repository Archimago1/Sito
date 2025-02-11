import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import PH1 from "../../../assets/9-1.jpg";
import PH2 from "../../../assets/9-2.jpg";
import PH3 from "../../../assets/9-3.jpg";
import PH4 from "../../../assets/9-4.jpg";
import PH5 from "../../../assets/9-5.jpeg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto9() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <NavBar />

      <Container className="mb-5">
        <Row className="mt-5 d-flex justify-content-center">
          <Col lg={9} xs={6} className="p-3 d-flex">
            <h1 className="font-face-Didot h1-progetto">
              PALAZZINA PLURIFAMILIARE
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
            <p className="font-face-FuturaRenner p-progetto">2021</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Interventi di manutenzione straordinaria
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
                  Pianta delle demolizioni
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta delle nuove costruzioni
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta della copertura con l'inserimento dei pannelli solari
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner p-progetto">
            Il progetto prevedeva un intervento di riqualificazione edilizia
            volto a migliorare la sicurezza strutturale, l’efficienza energetica
            e la sostenibilità dell’edificio, integrando soluzioni tecnologiche
            innovative.<br></br>
            <hr></hr>
            Si è iniziato con il consolidamento strutturale, un’operazione
            fondamentale per garantire la stabilità e la durabilità
            dell’edificio, migliorandone la resistenza a sollecitazioni statiche
            e dinamiche. A questo è seguita la realizzazione di un isolamento
            termico efficace attraverso l’applicazione di un cappotto sulle
            superfici opache verticali, orizzontali e inclinate. Questa
            soluzione contribuirà a ridurre le dispersioni termiche e a
            migliorare il comfort abitativo in ogni stagione.<br></br>
            <hr></hr>
            Per ottimizzare ulteriormente l’efficienza energetica, sono stati
            sostituiti gli impianti di climatizzazione invernale con soluzioni
            più performanti e sostenibili, abbinate alla posa di nuovi infissi
            ad alta efficienza, in grado di migliorare l’isolamento termico e
            acustico. A supporto del comfort interno, sono state installate
            schermature solari e chiusure oscuranti, utili per proteggere gli
            ambienti dal surriscaldamento estivo e per modulare l’ingresso della
            luce naturale.<br></br>
            <hr></hr>
            Un ruolo centrale nel progetto è ricoperto dall’installazione di una
            caldaia a condensazione, che garantisce un’elevata efficienza nella
            produzione di calore, riducendo consumi e emissioni. In aggiunta, la
            copertura dell’edificio ospita pannelli solari termici per la
            produzione di acqua calda sanitaria, affiancati da un impianto
            fotovoltaico destinato alla generazione di energia elettrica
            rinnovabile. Quest’ultimo sarà integrato con sistemi di accumulo,
            permettendo una gestione più efficiente dell’energia prodotta e un
            maggiore autoconsumo.<br></br>
            <hr></hr>
            Infine, in un’ottica di mobilità sostenibile, sono state installate
            le infrastrutture necessarie alla ricarica di veicoli elettrici,
            incentivando l’uso di mezzi a basso impatto ambientale.<br></br>
            <hr></hr>
            Nel complesso, questi interventi rendono l’edificio una struttura
            moderna, sicura ed energeticamente autosufficiente, migliorandone le
            prestazioni e riducendone significativamente l’impronta ecologica.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto9;
