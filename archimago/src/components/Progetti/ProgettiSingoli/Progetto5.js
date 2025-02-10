import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import PH1 from "../../../assets/5-1.jpg";
import PH2 from "../../../assets/5-2.jpg";
import PH3 from "../../../assets/5-3.jpg";
import PH4 from "../../../assets/5-4.jpg";
import PH5 from "../../../assets/5-5.jpg";
import PH6 from "../../../assets/5-6.jpg";

import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto5() {
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
              AREA ARCHEOLOGICA CASTELLO DI RIVOLI
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
            <p className="font-face-FuturaRenner p-progetto">Rivoli</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2012</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Riqualificazione dell’area archeologica
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
                  Vista delle coperture dalla terrazza del castello
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Planimetria e prospetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Vista dell’area archeologica da via Vittorio Amedeo II
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Vista tridimensionale d’insieme del progetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Vista dall’alto della scalinata
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Sezione sulla scalinata
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner p-progetto">
            Le opere che costituiscono oggetto del presente progetto riguardano
            in particolare il restauro dei resti archeologici rinvenuti e la
            realizzazione di una copertura di protezione dell’area. Lo studio
            del contesto paesistico e la ricerca di un dialogo con i manufatti
            che caratterizzano lo scenario sottostante il pendio ha portato ad
            una scelta che ha privilegiato l’uso di materiali tradizionali.
            <br></br>
            <hr></hr>
            Una fondazione continua in c.a., lungo il perimetro degli scavi a
            fianco della Via Vittorio Amedeo II, costituisce la base d’appoggio
            su cui impostare i pilastri in legno lamellare i quali sostengono la
            parte perimetrale della copertura verso la strada. La parte che si
            sviluppa lungo il muro contro terra esistente verso la scarpata
            risulta, a seconda dell’altezza di imposta, appoggiata o incastrata
            alla berlinese esistente. Le capriate in legno lamellare
            garantiscono la stabilità e la rigidezza necessaria a sostenere il
            manto di copertura realizzato con coppi di recupero in laterizio. La
            conformazione planimetrica della copertura risponde con semplicità
            ad una situazione esistente complessa, dovuta in particolare alla
            pianta irregolare dell’area e al suo posizionamento a ridosso della
            scarpata. La struttura infatti prosegue senza soluzione di
            continuità lungo l’andamento variabile della berlinese esistente, si
            compone di quattro campate, ciascuna delle quali costituita da un
            tetto a falde terminante a filo del muro contro terra.<br></br>
            <hr></hr>
            All’estremità del sito sono poste due aree di sosta dotate di
            bacheche informative in acciaio inox per illustrare le
            caratteristiche dell’area e una nuova scala in c.a. di salita al
            Castello. La perimetrazione del sito avviene tramite ringhiere in
            acciaio con finitura tipo ferro micaceo. Il parapetto e gli
            apparecchi di illuminazione della nuova scala in c.a. sono
            realizzati in acciaio tipo Cor-Ten per integrarsi con la
            sistemazione paesaggistica delle scarpate già realizzata. Il
            rivestimento della trave in c.a. della berlinese è realizzato con
            intonaco strutturale in betoncino armato con rete elettrosaldata e
            tinteggiatura come il resto del muro contro terra esistente. La
            lattoneria è in acciaio zincato preverniciato.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto5;
