import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/11.jpg";
import PH2 from "../../../assets/12.jpg";
import PH3 from "../../../assets/13.jpg";
import PH4 from "../../../assets/14.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto1() {
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
              ASILO NIDO ADRIANO OLIVETTI
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
            <p className="font-face-FuturaRenner p-progetto">Ivrea</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2004</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Restauro e adeguamento normativo per l’ottenimento del CPI
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
                  La nuova sala giochi, più confortevole e sicura
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Planimetria generale con inquadramento e indicazione degli
                  interventi
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Particolari costruttivi della nuova parete attrezzata dotata
                  di armadietto, mensola e fasciatoio
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  La nuova parete attrezzata sotto la vetrata
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            L’asilo nido Adriano Olivetti fu progettato e costruito tra il 1939
            e il 1941 dagli architetti L. Figini e G. Pollini, nell’ambito della
            seconda fase di ampliamento delle officine Olivetti.<br></br>
            <hr></hr>
            Gli interventi previsti, dettati da esigenze normative (Prevenzione
            Incendi, bonifica amianto), non interferiscono con i caratteri
            originali dell’edificio, il quale risulta identificato nel nuovo
            P.R.G. del 2000 quale “Edificio di rilevanza architettonica e
            monumentale” . La sostituzione di materiali o la modifica di
            elementi costruttivi (pavimenti, serramenti, …) riguarda parti già
            sostituite in passato e sono state pensate nel rispetto delle
            tipologie e disegno originali.<br></br>
            <hr></hr>
            L’edificio è composto da un corpo principale sviluppato su due
            livelli fuori terra, nel quale sono collocate le sezioni ed i locali
            di servizio quali cucina, bagni, magazzini, spogliatoi ecc., ed un
            piano interrato dove sono ubicati i magazzini per il deposito del
            materiale didattico. A destra dell’ingresso principale è presente un
            piccolo fabbricato i cui locali sono utilizzati come uffici per la
            direzione ed il personale. Una rampa e una gradinata portano al
            giardino posto sul dosso collinoso, dove è presente un’area verde
            per il gioco ed un basso fabbricato utilizzato come aula giardino
            nel periodo estivo.<br></br>
            <hr></hr>
            L’obiettivo principale dell’intervento risultava la messa a norma
            dell’edificio relativamente alle opere necessarie al conseguimento
            del C.P.I.; a tal fine sono stati realizzati una serie di interventi
            di manutenzione straordinaria. In particolare, l’adeguamento del
            fabbricato alle norme di sicurezza antincendio hanno comportato lo
            studio di nuovi percorsi di esodo che utilizzano le aperture
            esistenti, opportunamente ridisegnate, ma senza apportare variazioni
            sulla loro connotazione architettonica originale. In tal modo si è
            riusciti a dotare di una propria uscita di sicurezza ogni locale
            frequentato dai bambini, elevando così il livello di sicurezza ben
            oltre il requisito normativo. Le pavimentazioni esistenti, più volte
            oggetto di sostituzione nel corso della vita dell’edificio, sono
            state sostituite con pavimenti in linoleum, come quelli originali.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
          <Col
            lg={1}
            xs={3}
            className="p-0 d-flex flex-column align-items-center"
          >
            <Link
              to="/progetti/progetto15"
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
              to="/progetti/progetto2"
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

export default Progetto1;
