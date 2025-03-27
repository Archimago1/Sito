import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/13-1.jpeg";
import PH2 from "../../../assets/13-2.jpg";
import PH3 from "../../../assets/13-3.jpg";
import PH4 from "../../../assets/13-4.jpg";
import PH5 from "../../../assets/13-5.jpg";
import PH6 from "../../../assets/13-6.jpg";
import PH7 from "../../../assets/13-7.jpg";
import PH8 from "../../../assets/13-8.jpg";
import PH9 from "../../../assets/13-9.jpeg";
import PH10 from "../../../assets/13-10.jpeg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto13() {
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
              EDIFICIO CONDOMINIALE
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
            <p className="font-face-FuturaRenner p-progetto">Cuorgnè</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2023</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Interventi di manutenzione straordinaria - <br></br>
              <strong>Progetto e realizzazione</strong>
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
                <p className="font-face-FuturaRenner">Pianta di progetto</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Posa del cappotto termico
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Particolare del cappotto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Posa dell'impianto di riscaldamento a pavimento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Predisposizione degli impianti durante l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Nuovo bagno dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH8} id="pc8" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Nuovo bagno dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH9} id="pc9" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH10} id="pc10" className="carouselImage d-block" />
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
            Il progetto prevedeva un insieme di interventi volti a migliorare le
            prestazioni energetiche dell’edificio, riducendo i consumi e
            aumentando l’autosufficienza attraverso l’utilizzo di tecnologie
            sostenibili.
            <br></br>
            <hr></hr>
            Uno degli aspetti fondamentali dell’intervento riguardava
            l’isolamento termico delle superfici opache verticali, orizzontali e
            inclinate mediante la posa di un cappotto termico. Questo sistema ha
            permesso di ridurre le dispersioni di calore, migliorando il comfort
            abitativo e diminuendo il fabbisogno energetico per il riscaldamento
            e il raffrescamento. A supporto di questa strategia, sono stati
            sostituiti gli infissi con modelli ad alte prestazioni, capaci di
            incrementare ulteriormente l’efficienza energetica dell’edificio e
            migliorare l’isolamento acustico.<br></br>
            <hr></hr>Per ottimizzare la gestione della luce naturale e del
            calore solare, sono state installate schermature solari e chiusure
            oscuranti, che contribuiscono a limitare il surriscaldamento estivo
            e a migliorare l’efficienza complessiva dell’involucro edilizio.
            <br></br>
            <hr></hr>
            Il sistema di climatizzazione è stato completamente rinnovato con
            l’installazione di pompe di calore (PDC) a compressione di vapore
            elettriche, che rappresentano una soluzione altamente efficiente per
            il riscaldamento e il raffrescamento degli ambienti. Inoltre, in
            caso di condizioni idonee, il progetto prevedeva anche l’utilizzo di
            sonde geotermiche, che consentono di sfruttare il calore naturale
            del sottosuolo per ottimizzare le prestazioni del sistema.<br></br>
            <hr></hr>
            Per favorire l’indipendenza energetica dell’edificio, è stato
            installato un impianto fotovoltaico, che consentirà di produrre
            energia elettrica da fonte rinnovabile. Questo è stato integrato con
            sistemi di accumulo, che permettono di immagazzinare l’energia
            prodotta durante il giorno e utilizzarla nelle ore di minore
            irraggiamento solare, aumentando così l’autoconsumo e riducendo la
            dipendenza dalla rete elettrica.<br></br>
            <hr></hr>
            Infine, il progetto include l’installazione di infrastrutture per la
            ricarica di veicoli elettrici, favorendo la mobilità sostenibile e
            rendendo l’edificio pronto per le esigenze future in termini di
            efficienza energetica e riduzione delle emissioni.<br></br>
            <hr></hr>
            Nel complesso, questi interventi contribuiscono a trasformare
            l’edificio in una struttura moderna ed ecosostenibile, garantendo un
            significativo risparmio energetico e un miglioramento della qualità
            della vita degli occupanti.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
          <Col
            lg={1}
            xs={3}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Link
              to="/progetti/progetto12"
              className="link d-flex flex-column align-items-center"
            >
              <h6 className="font-face-Didot-progetti mt-3 h6freccia">
                PROGETTO PRECEDENTE
              </h6>
              <i class="bi bi-arrow-left"></i>
            </Link>
          </Col>

          <Col
            lg={1}
            xs={3}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Link
              to="/progetti/progetto1"
              className="link d-flex flex-column align-items-center"
            >
              <h6 className="font-face-Didot-progetti mt-3 h6freccia">
                PROGETTO SUCCESSIVO
              </h6>
              <i class="bi bi-arrow-right"></i>
            </Link>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto13;
