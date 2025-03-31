import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/15-1.jpeg";
import PH2 from "../../../assets/15-2.jpg";
import PH3 from "../../../assets/15-3.jpg";
import PH4 from "../../../assets/15-4.jpg";
import PH5 from "../../../assets/15-5.jpg";
import PH6 from "../../../assets/15-6.jpg";
import PH7 from "../../../assets/15-7.jpg";
import PH8 from "../../../assets/15-8.jpeg";
import PH9 from "../../../assets/15-9.jpeg";
import PH10 from "../../../assets/15-10.jpeg";
import PH11 from "../../../assets/15-11.jpeg";

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
                  L'appartamento prima dell'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'appartamento durante l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'appartamento durante l'intervento
                </p>
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
                  Particolare del soffitto durante l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Il nuovo pavimento in legno
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Il nuovo rivestimento del bagno
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH8} id="pc8" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'appartamento dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH9} id="pc9" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  L'appartamento dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH10} id="pc10" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Primo bagno dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH11} id="pc11" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Secondo bagno dopo l'intervento
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto prevedeva un intervento di rinnovamento volto a
            migliorare la funzionalità e l’efficienza dell’edificio, con
            un’attenzione particolare all’adeguamento impiantistico e al
            miglioramento del comfort abitativo.
            <br></br>
            <hr></hr>
            Uno degli interventi principali riguardava il rifacimento completo
            dei servizi igienici, compresi gli impianti idrico-sanitari. Questo
            intervento permette di migliorare l’efficienza degli impianti
            esistenti, garantendo una maggiore affidabilità e adeguandoli alle
            normative vigenti. I nuovi sanitari e finiture sono scelti per
            garantire qualità, durata nel tempo e una migliore fruibilità degli
            spazi.<br></br>
            <hr></hr>Per ottimizzare la distribuzione degli ambienti, vengono
            effettuate lievi modifiche murarie, finalizzate a creare un layout
            più funzionale e adatto alle esigenze degli utenti. Le nuove
            soluzioni spaziali contribuiscono a migliorare la vivibilità degli
            ambienti, ottimizzando la disposizione degli arredi e favorendo una
            maggiore fruibilità degli spazi interni.
            <br></br>
            <hr></hr>
            Un altro elemento chiave dell’intervento è la sostituzione dei
            serramenti esistenti in legno con nuovi infissi in PVC conformi alla
            normativa vigente. Questa scelta consente di migliorare l’isolamento
            termico e acustico dell’edificio, garantendo una maggiore efficienza
            energetica e un miglior comfort interno. I nuovi serramenti offrono
            inoltre una maggiore durabilità e una ridotta necessità di
            manutenzione nel tempo.<br></br>
            <hr></hr>
            Infine, il progetto prevedeva il rifacimento completo dell’impianto
            elettrico, con l’obiettivo di migliorare la sicurezza e l’efficienza
            dell’infrastruttura esistente. Il nuovo impianto è stato progettato
            in conformità alle normative attuali, garantendo una distribuzione
            ottimale dei punti luce e delle prese elettriche, con eventuali
            predisposizioni per future implementazioni tecnologiche.<br></br>
            <hr></hr>
            Nel complesso, questi interventi contribuiscono a rendere l’edificio
            più moderno, funzionale ed efficiente, migliorandone la qualità
            abitativa e garantendo un adeguamento agli standard normativi
            attuali.
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
