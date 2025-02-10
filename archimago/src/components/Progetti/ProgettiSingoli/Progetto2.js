import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import PH1 from "../../../assets/2-1.jpg";
import PH2 from "../../../assets/2-2.jpg";
import PH3 from "../../../assets/2-3.jpg";
import PH4 from "../../../assets/2-4.jpg";
import PH5 from "../../../assets/2-5.jpg";
import PH6 from "../../../assets/2-6.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto2() {
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
              PISCINA COMUNALE MASSIMO RIVETTI
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
            <p className="font-face-FuturaRenner p-progetto">Biella</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2001</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Ampliamento della piscina comunale di Biella
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
                  La facciata vetrata, con vista sul piccolo parco annesso alla
                  piscina esterna
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto su strada</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto sul parco</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Sezione</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  La nuova vasca olimpionica vista dalla tribuna
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Dalla tribuna, attraverso la vetrata, è possibile godere della
                  pregevole vista sul piccolo parco annesso alla piscina esterna
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner p-progetto">
            Il complesso sportivo, realizzato dalla famiglia Rivetti negli anni
            ’60, era costituito da una palestra ed una piscina di 25 metri
            intitolata a “Massimo Rivetti”, situata nel comune di Biella. Il
            progetto aveva come obiettivo l’esecuzione delle opere di
            ristrutturazione e ampliamento della piscina comunale. Le opere si
            sono dunque svolte secondo due filoni: la realizzazione un nuovo
            corpo di fabbrica contenente una vasca olimpionica e la
            ristrutturazione dell’area vasca e servizi preesistente.<br></br>
            <hr></hr>
            La zona spogliatoi e servizi è stata oggetto di un completo
            rifacimento avvenuto attraverso la demolizione di tutte le
            partizioni esistenti. Il nuovo layout distributivo è stato pensato
            per rispondere alle nuove esigenze funzionali e normative. Nella
            area dell’ex piscina è stato realizzato un solaio di copertura in
            c.a. concepito per creare al di sotto un bacino di compenso e
            stoccaggio dell’acqua. L’area è stata inoltre dotata un nuovo
            accesso dall’esterno e di alcuni nuovi locali destinati a pronto
            soccorso e servizi igienici. All’esterno sono state ripristinate le
            condizioni originarie di tutta l’area verde interessata dalle opere
            di scavo e di cantiere in genere. Al piano interrato sono state
            realizzate la centrale termica e due scale in ferro per l’ accesso
            al piano della vasca preesistente in cui sono stati ricollocati
            alcuni locali tecnici.<br></br>
            <hr></hr>
            L’area di ampliamento ha visto la costruzione di un nuovo edificio
            di oltre 2000 mq ospitante una vasca di dimensioni olimpioniche
            (51.2 m x 21 m) ed una tribuna per il pubblico da 600 posti. Al di
            sotto della tribuna trovano collocazione i servizi igienici per il
            pubblico e il personale, le biglietterie e i depositi degli
            attrezzi. Il tamponamento a sud è costituito da una facciata vetrata
            continua autoportante, con vista sul piccolo parco annesso alla
            piscina esterna.<br></br>
            <hr></hr>
            L’intero progetto è stato redatto nel rispetto della normativa
            vigente in materia di edilizia sportiva, igiene e sicurezza dei
            luoghi di lavoro. Particolare attenzione inoltre è stata prestata
            all’abbattimento delle barriere architettoniche: i maggiori
            dislivelli sono stati dotati dei servoscale necessari a garantire
            l’accessibilità, sono stati realizzati nuovi servizi igienici e
            spazi con caratteristiche conformi a quanto descritto dal D.M.
            236/89, si è predisposto un elevatore idraulico al fine di
            facilitare l’ingresso in acqua e la zona spettatori è stata
            concepita per garantire un accesso adeguato delle persone
            diversamente abili.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto2;
