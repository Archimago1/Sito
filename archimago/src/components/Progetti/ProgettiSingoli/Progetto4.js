import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/4-1.jpg";
import PH2 from "../../../assets/4-2.jpg";
import PH3 from "../../../assets/4-3.jpg";
import PH4 from "../../../assets/4-4.jpg";
import PH5 from "../../../assets/4-5.jpg";
import PH6 from "../../../assets/4-6.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto4() {
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
            <h1 className="font-face-Didot h1-progetto">
              SCUOLA MEDIA GUIDO GOZZANO
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
            <p className="font-face-FuturaRenner p-progetto">Caluso</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2008</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Realizazione di una nuova scuola media
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
                  Vista da via unità d’italia
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Planimetria del piano terra e prospetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Schema degli impianti tecnologici
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Piano del colore e dei rivestimenti al piano primo
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Piano del colore delle pavimentazioni e dei rivestimenti al
                  piano terra
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto ha riguardato i lavori per la realizzazione della nuova
            scuola media per il Comune di Caluso, realizzata in due lotti
            distinti. L’edificio si presenta costituito da un piano
            seminterrato, in cui sono ubicati la mensa, alcuni laboratori e
            aule, due piani fuori terra ospitanti le aule, la biblioteca e la
            segreteria, e un piano sottotetto nel quale è collocata la centrale
            termica.<br></br>
            <hr></hr>
            Poiché il progetto del primo lotto dell’edificio era già esistente,
            prima dell’esecuzione delle opere è emersa la necessità di adeguarlo
            alle nuove normative vigenti in materia di efficienza termica e
            contenimento dei consumi. Si è così provveduto in primo luogo alla
            rideterminazione dell’involucro edilizio al fine di elevarne le
            prestazioni termoigrometriche, optando per una parete ventilata
            dotata di cappotto termico, serramenti a taglio termico con vetrate
            isolanti termoacustiche e vetri basso- emissivi. L’impianto di
            riscaldamento degli ambienti interni è stato realizzato tramite
            dotazione di pannelli radianti a pavimento con circolazione di acqua
            calda a bassa temperatura in circuito chiuso. La copertura è stata
            realizzata tramite orditura in legno lamellare su cui trova
            collocazione un manto in lamiera grecata coibentata. Ulteriori
            opere, finalizzate al miglioramento del clima acustico, sono state
            inserite durante l’esecuzione dei lavori, al fine di ottemperare
            alle prescrizioni emerse dallo studio di validazione del progetto
            esecutivo. A tale scopo, oltre al già citato nuovo involucro
            edilizio, sono stati realizzati pavimenti galleggianti e pareti
            divisorie interne stratificate e desolidarizzate.<br></br>
            <hr></hr>
            Sia nella realizzazione del primo lotto che in quella del secondo,
            per la scelta dei materiali e delle finiture interne si è tenuto
            conto delle caratteristiche relative alle emissioni, alle proprietà
            di asetticità e del grado di riciclabilità.<br></br>
            <hr></hr>
            Una particolare attenzione è stata riservata alla scelta dei colori,
            al fine di armonizzare gli ambienti dell’intero involucro edilizio;
            il gioco di colori previsto permette di distinguere un piano da un
            altro e di evidenziare i percorsi di collegamento tra i vari
            ambienti, rendendoli più luminosi e adeguati all’utenza scolastica.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
          <Col
            lg={1}
            xs={3}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Link
              to="/progetti/progetto3"
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
              to="/progetti/progetto5"
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

export default Progetto4;
