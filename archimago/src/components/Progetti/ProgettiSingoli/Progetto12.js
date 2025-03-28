import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/12-1.jpg";
import PH2 from "../../../assets/12-2.jpg";
import PH3 from "../../../assets/12-3.jpg";
import PH4 from "../../../assets/12-4.jpg";
import PH5 from "../../../assets/12-5.jpg";
import PH6 from "../../../assets/12-6.jpeg";
import PH7 from "../../../assets/12-7.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto12() {
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
              EDIFICIO UNIFAMILIARE
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
            <p className="font-face-FuturaRenner p-progetto">Torino</p>
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
                <p className="font-face-FuturaRenner">
                  Lo stato della copertura prima dell'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Piante di progetto</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Progetto delle due facciate
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  La copertura durante l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  La copertura dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
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
            Il progetto prevedeva una serie di interventi mirati a migliorare
            l’efficienza energetica dell’edificio, riducendo i consumi e
            aumentando il comfort abitativo attraverso soluzioni avanzate di
            isolamento, produzione energetica e innovazione tecnologica.
            <br></br>
            <hr></hr>
            Uno degli interventi principali ha riguardato l’isolamento termico
            delle superfici opache verticali, orizzontali e inclinate tramite la
            posa di un cappotto termico. Questo sistema permette di ridurre le
            dispersioni di calore, mantenendo più stabili le temperature interne
            e migliorando l’efficienza energetica dell’edificio. Inoltre, per
            garantire un isolamento ottimale anche nelle coperture non
            disperdenti, è stata effettuata una coibentazione mirata quando non
            si è proceduto contestualmente all’isolamento del solaio
            sottostante, assicurando così una protezione efficace contro le
            dispersioni termiche.<br></br>
            <hr></hr>A supporto dell’isolamento, sono stati sostituiti gli
            infissi con nuovi serramenti ad alte prestazioni, in grado di
            migliorare ulteriormente l’isolamento termico e acustico,
            contribuendo alla riduzione dei consumi energetici per il
            riscaldamento e il raffrescamento.<br></br>
            <hr></hr>
            Per il sistema di riscaldamento, è stata installata una caldaia
            standard, che garantisce un’erogazione efficiente del calore,
            assicurando comfort abitativo e funzionalità.<br></br>
            <hr></hr>
            Un altro aspetto fondamentale del progetto è stata la transizione
            verso una maggiore indipendenza energetica, grazie all’installazione
            di un impianto fotovoltaico per la produzione di energia elettrica
            da fonte rinnovabile. Per massimizzare l’efficienza di questo
            sistema, sono stati integrati accumulatori che permettono di
            immagazzinare l’energia prodotta, rendendola disponibile anche nelle
            ore di minor irraggiamento solare e riducendo la dipendenza dalla
            rete elettrica tradizionale.<br></br>
            <hr></hr>
            Infine, in ottica di mobilità sostenibile, sono state realizzate le
            infrastrutture per la ricarica di veicoli elettrici, incentivando
            l’uso di mezzi ecologici e rendendo l’edificio pronto per le
            esigenze future in termini di sostenibilità ambientale.<br></br>
            <hr></hr>
            Questi interventi porteranno a un significativo miglioramento delle
            prestazioni energetiche dell’edificio, garantendo un maggiore
            risparmio sui consumi, un aumento del comfort e una riduzione
            dell’impatto ambientale.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
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
              to="/progetti/progetto13"
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

export default Progetto12;
