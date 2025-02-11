import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import PH1 from "../../../assets/7-1.jpg";
import PH2 from "../../../assets/7-2.jpg";
import PH3 from "../../../assets/7-3.jpg";
import PH4 from "../../../assets/7-4.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto7() {
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
              PARROCCHIA SAN GIOVANNI E BARTOLOMEO
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
            <p className="font-face-FuturaRenner p-progetto">Rivara</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2020</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Interventi di restauro conservativo
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
                  Prospetto sulla piazza della parrocchia
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Abside voltato e decorato con affreschi
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Particolare della volta dell’abside
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Crepe e lesioni presenti sulla volta
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner p-progetto">
            L’individuazione dell’epoca di costruzione dell’impianto originario
            è databile con certezza in data 29 maggio 1594, ma solo nel 1604 si
            avrà la consacrazione al culto. Successivamente la struttura è stata
            ampliata e modificata, fino a raggiungere l’aspetto attuale nella
            prima metà dell’800. L’intervento si pone l’obiettivo di mettere in
            sicurezza la volta dell’abside della navata sinistra e la volta con
            eguale tipologia al piano superiore sovrastante.<br></br>
            <hr></hr>
            La zona interessata dalle lesioni infatti è la volta a creste e vele
            dell’abside, comunemente detta a ombrello. La lesione che
            maggiormente creava preoccupazione di carattere strutturale
            riguardava la volta superiore in quanto si ipotizzava che i
            movimenti delle masse murarie perimetrali avessero determinato un
            abbassamento dei settori delle superfici voltate, inoltre si
            ipotizzava che una o più travi lignee della copertura, con la loro
            flessione o assestamento agli appoggi, avessero trasferito una parte
            del carico del tetto sul estradosso della volta.<br></br>
            <hr></hr>
            L’intervento ha visto la rimozione della copertura dell’abside e la
            realizzazione di una calotta strutturale in cls, ancorata con
            grappini metallici fissati alla volta e collegati tra loro da rete
            metallica. L’intervento è stato ripetuto su entrambe le volte, con
            ripristino finale della copertura.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto7;
