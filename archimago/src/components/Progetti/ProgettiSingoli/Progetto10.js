import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/10-1.jpg";
import PH2 from "../../../assets/10-2.jpg";
import PH3 from "../../../assets/10-3.jpg";
import PH4 from "../../../assets/10-4.jpg";
import PH5 from "../../../assets/10-5.jpg";
import PH6 from "../../../assets/10-6.jpg";
import PH7 from "../../../assets/10-7.jpg";
import PH8 from "../../../assets/10-8.jpg";
import PH9 from "../../../assets/10-9.jpeg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto10() {
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
              VILLA INDIPENDENTE
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
            <p className="font-face-FuturaRenner p-progetto">Strambino</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2024</p>
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
                  Pianta delle demolizioni del piano terra
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta delle nuove costruzioni del piano terra
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta delle demolizioni del piano primo
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta delle nuove costruzioni del piano primo
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta della copertura prima dell'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta della copertura con l'inserimento dei pannelli solari
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio prima dell'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH8} id="pc8" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'edificio dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH9} id="pc9" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Partcolare dei pannelli solari
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto di riqualificazione edilizia si concentra
            sull’efficienza energetica e sull’integrazione di tecnologie
            avanzate, con l’obiettivo di migliorare il comfort abitativo e
            ridurre i consumi.<br></br>
            <hr></hr>
            Uno degli interventi principali è stato l’isolamento termico delle
            superfici opache verticali, orizzontali e inclinate mediante
            l’applicazione di un cappotto termico. Questa soluzione consente di
            ridurre le dispersioni di calore, migliorando la capacità
            dell’edificio di mantenere una temperatura interna stabile sia in
            inverno che in estate, con un impatto positivo sulle prestazioni
            energetiche complessive.<br></br>
            <hr></hr>
            Parallelamente, sono stati sostituiti gli impianti di
            climatizzazione invernale con sistemi più efficienti e performanti,
            capaci di garantire un riscaldamento ottimale con minori consumi. A
            supporto di questa trasformazione, anche gli infissi sono stati
            sostituiti con modelli ad alta efficienza, in grado di migliorare
            l’isolamento termico e acustico, contribuendo ulteriormente alla
            riduzione della dispersione energetica.<br></br>
            <hr></hr>
            Per una gestione ottimale della luce naturale e del calore solare,
            vengono installate schermature solari e chiusure oscuranti, che
            aiuteranno a prevenire il surriscaldamento degli ambienti nei mesi
            più caldi e a modulare l’ingresso della luce in base alle esigenze.
            <br></br>
            <hr></hr>
            Uno degli aspetti più innovativi del progetto è l’installazione di
            un sistema BA (Building Automation), che permette il controllo
            automatizzato di vari impianti, tra cui climatizzazione,
            illuminazione e sicurezza. Questa tecnologia aumenta l’efficienza
            dell’edificio, riducendo sprechi e migliorando il comfort degli
            occupanti.<br></br>
            <hr></hr>
            L’intervento prevede anche un’importante spinta verso
            l’autosufficienza energetica grazie all’installazione di un impianto
            fotovoltaico, progettato per sfruttare al massimo l’energia solare.
            A questo si affiancano sistemi di accumulo, che consentono di
            immagazzinare l’energia prodotta e utilizzarla quando necessario,
            riducendo la dipendenza dalla rete elettrica.<br></br>
            <hr></hr>
            Infine, in ottica di mobilità sostenibile, vengono installate
            infrastrutture per la ricarica di veicoli elettrici, promuovendo
            così l’uso di mezzi a basso impatto ambientale e contribuendo alla
            creazione di un edificio moderno e sostenibile.<br></br>
            <hr></hr>
            Nel complesso, questi interventi garantiscono un significativo
            miglioramento delle prestazioni energetiche e della vivibilità
            dell’immobile, rendendolo più efficiente, tecnologico e rispettoso
            dell’ambiente.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
          <Col
            lg={1}
            xs={3}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Link
              to="/progetti/progetto9"
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
              to="/progetti/progetto11"
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

export default Progetto10;
