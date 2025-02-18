import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/6-1.jpg";
import PH2 from "../../../assets/6-2.jpg";
import PH3 from "../../../assets/6-3.jpg";
import PH4 from "../../../assets/6-4.jpg";
import PH5 from "../../../assets/6-5.jpg";
import PH6 from "../../../assets/6-6.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto6() {
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
              PLESSO SCOLASTICO GIOVANNI PAPINI
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
            <p className="font-face-FuturaRenner p-progetto">
              Radda in Chianti
            </p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2007</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Ampliamento complesso scolastico
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
                  Schizzo preliminare di progetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Schizzo preliminare di progetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Planimetria del piano terra
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto est</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto ovest</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto sud</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto di ampliamento del fabbricato scolastico esistente è
            stato condotto secondo modalità rispettose delle scelte effettuate
            in origine nei riguardi dell’edificio (risalente ai primi anni ’70),
            prediligendo la stessa tipologia e gli stessi materiali costruttivi
            rivisti in chiave moderna.
            <br></br>
            <hr></hr>
            L’ampliamento è stato previsto su due livelli e presenta dimensione
            in pianta di ca. 40m x 15m; un nuovo breve corridoio svolge la
            duplice funzione di collegamento con la preesistenza e di zona
            filtro, al fine di consentire un autonomo utilizzo dell’area
            palestra e di una parte dei servizi igienici in orario
            extrascolastico. Il nuovo edificio presenta il medesimo orientamento
            dell’esistente, reso visivamente evidente dalla realizzazione di un
            importante setto in muratura di mattoni faccia a vista che funge da
            asse portante dell’ampliamento e al quale corrisponde funzionalmente
            un ampio spazio connettivo e multifunzionale lungo il quale vengono
            a svilupparsi le funzioni richieste, ovvero un atrio preceduto da
            portico, cinque aule e servizi igienici, il tutto collocato in
            corrispondenza del secondo livello del nuovo edificio. Tutte le aule
            presentano uscite dirette all’esterno dove è collocato un ampio
            terrazzo. Al primo livello trovano spazio un locale destinato a
            deposito e un grande portico, corrispondente al soprastante
            terrazzo, collegato ad un’estesa area piana verde. L’ampio corridoio
            di connessione riceve luce naturale dall’alto tramite un grande
            lucernario “intelligente” dotato di parti apribili meccanicamente e
            governate da sensori di temperatura, il cui funzionamento permette,
            oltre al passaggio di luce naturale, la captazione del calore solare
            nei periodi più freddi e, viceversa, il suo smaltimento in quelli
            più caldi per innesco dell’effetto camino. Al di sopra del
            lucernario trovano collocazione sia pannelli solari per la
            produzione di acqua calda, sia pannelli fotovoltaici per la
            produzione di energia elettrica. Il riscaldamento dell’edificio
            prevede sistemi a pannelli radianti a pavimento e caldaie a
            condensazione, eventualmente collegabili al circuito dei pannelli
            solari; in campo illuminotecnico, strategie come l’impiego di
            lampade a basso consumo e di pannelli a cellule fotovoltaiche
            permettono un cospicuo risparmio energetico ed una conseguente
            riduzione dei costi gestionali dell’edificio.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
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
              to="/progetti/progetto7"
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

export default Progetto6;
