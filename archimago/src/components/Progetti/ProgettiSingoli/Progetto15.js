import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/14-1.jpg";
import PH2 from "../../../assets/14-2.jpg";
import PH3 from "../../../assets/14-3.jpg";
import PH4 from "../../../assets/14-4.jpg";
import PH5 from "../../../assets/14-5.jpg";
import PH6 from "../../../assets/14-6.jpg";
import PH7 from "../../../assets/14-7.jpg";
import PH8 from "../../../assets/14-8.jpg";
import PH9 from "../../../assets/14-9.jpg";
import PH10 from "../../../assets/14-10.jpeg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto15() {
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
              APPARTAMENTO A TORINO
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
            <p className="font-face-FuturaRenner p-progetto">2022</p>
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
                <p className="font-face-FuturaRenner">Piante di progetto</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Pianta della copertura</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Una stanza durante l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Posa del cappotto termico
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Vista del cappotto termico interno
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Posa dell'impianto di riscaldamento a pavimento radiante
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
                  L'edificio dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH10} id="pc10" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Particolare dei nuovi pannelli fotovoltaici
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto di riqualificazione energetica prevedeva una serie di
            interventi mirati a migliorare l’efficienza dell’edificio, riducendo
            i consumi e aumentando il comfort abitativo attraverso soluzioni
            avanzate di isolamento, climatizzazione e produzione energetica da
            fonti rinnovabili.
            <br></br>
            <hr></hr>
            Uno degli interventi chiave riguardava l’isolamento termico delle
            superfici opache verticali, orizzontali e inclinate mediante la posa
            di un cappotto termico. Questa soluzione consente di ridurre le
            dispersioni di calore, migliorando l’efficienza energetica
            complessiva dell’edificio e garantendo un ambiente interno più
            confortevole, sia in inverno che in estate.<br></br>
            <hr></hr>A supporto di questa trasformazione, sono stati sostituiti
            gli infissi con modelli ad alte prestazioni, capaci di migliorare
            l’isolamento termico e acustico, riducendo le perdite di energia e
            ottimizzando il comfort degli ambienti interni. Inoltre, per gestire
            al meglio la luce naturale e ridurre il surriscaldamento estivo,
            sono state installate schermature solari e chiusure oscuranti, che
            contribuiscono all’efficienza energetica dell’edificio.
            <br></br>
            <hr></hr>
            Per quanto riguarda gli impianti, è stata effettuata la sostituzione
            degli vecchi sistemi di climatizzazione invernale con soluzioni più
            efficienti e performanti. A complemento di questo intervento, è
            stata installata una caldaia a condensazione, che garantisce un
            elevato rendimento energetico riducendo i consumi e le emissioni
            rispetto alle caldaie tradizionali.<br></br>
            <hr></hr>
            Un altro aspetto fondamentale del progetto è la produzione di
            energia da fonti rinnovabili, attraverso l’installazione di un
            impianto fotovoltaico. Questo permette di generare energia elettrica
            pulita, riducendo la dipendenza dalla rete e abbattendo i costi
            energetici. Per massimizzare l’autoconsumo dell’energia prodotta, il
            sistema è stato integrato con accumulatori, che consentono di
            immagazzinare l’energia in eccesso e utilizzarla nei momenti di
            maggiore necessità.<br></br>
            <hr></hr>
            Infine, il progetto prevedeva l’installazione di infrastrutture per
            la ricarica di veicoli elettrici, promuovendo così la mobilità
            sostenibile e rendendo l’edificio più moderno e allineato agli
            standard ambientali futuri.<br></br>
            <hr></hr>
            Nel complesso, questi interventi portano a un notevole miglioramento
            delle prestazioni energetiche, aumentando il valore dell’edificio,
            riducendo l’impatto ambientale e migliorando la qualità della vita
            degli occupanti.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
          <Col
            lg={1}
            xs={3}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Link
              to="/progetti/progetto14"
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

export default Progetto15;
