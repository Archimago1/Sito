import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

import PH1 from "../../../assets/3-1.jpg";
import PH2 from "../../../assets/3-2.jpg";
import PH3 from "../../../assets/3-3.jpg";
import PH4 from "../../../assets/3-4.jpg";
import PH5 from "../../../assets/3-5.jpg";
import PH6 from "../../../assets/3-6.jpg";
import PH7 from "../../../assets/3-7.jpg";
import PH8 from "../../../assets/3-8.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto3() {
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
              SCUOLA MEDIA GIOVANNI FALCONE
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
            <p className="font-face-FuturaRenner p-progetto">Mappano</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHEN</h5>
            <p className="font-face-FuturaRenner p-progetto">2010</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Ampliamento della scuola media Giovanni Falcone
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
                  La scuola sopraelevata vista dal giardino
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH2} id="pc2" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Planimetria del piano terra
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Planimetria del piano primo
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto verso sud</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Prospetto verso ovest</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Sezione</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  I pilastri a sostegno della copertura scandiscono il prospetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH8} id="pc8" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Lo spazio prospettico creato dal susseguirsi dei portali lungo
                  il camminamento esterno
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner p-progetto">
            Il progetto ha riguardato le opere di ampliamento di un edificio
            scolastico esistente: la Scuola Media “G. Falcone” sita a Mappano,
            Frazione del Comune di Borgaro T.se. Nello specifico l’intervento si
            è concretizzato nella sopraelevazione di un corpo di fabbrica
            dell’edificio scolastico, al fine di soddisfare la crescente
            necessità da parte della scuola di nuovi laboratori, nuove aule e
            relativi servizi igienici. L’obiettivo principale era quello di
            realizzare un edificio che, oltre a garantire in modo ottimale
            l’esercizio delle funzioni caratteristiche della destinazione d’uso,
            rappresentasse un modello di sostenibilità ambientale e qualità di
            fruizione. Per ottenere i risultati prefissati, si è seguito un un
            processo di verifica di qualità prestazionale e compatibilità
            ambientale per ogni scelta di carattere architettonico, tecnologico
            o impiantistico.<br></br>
            <hr></hr>
            Per quanto possibile, per l’ampliamento si è cercato di mantenere le
            stesse caratteristiche architettoniche, in continuità con la
            preesistenza. L’ossatura portante è stata realizzata in c.a. con
            contrafforti antisismici in acciaio e cemento armato mentre la
            muratura perimetrale di tamponamento è stata costruita con sistema a
            cassa vuota, costituito da laterizio porizzato intonacato verso
            l’interno e mattoni faccia vista verso l’esterno, con interposizione
            di pannelli isolanti in lana minerale. Tutte le partizioni interne,
            sono state realizzate con murature stratificate al fine di
            raggiungere un adeguato isolamento acustico tra gli ambienti
            confinanti. Tutti i serramenti esterni sono stati costruiti con
            l’impiego di profili in alluminio a taglio termico con vetrate
            isolanti termoacustiche e vetri basso emissivi, i quali garantiscono
            una trasmittanza termica media serramento/vetro Uw inferiore o
            uguale a 1.4 W/ m2K. La copertura dell’edificio è stata realizzata
            con struttura in legno lamellare, con travi “sdraiate” di spessore 7
            cm. Il manto di copertura è costituito in lamiera grecata, con
            creazione di ventilazione naturale da gronda a colmo.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Progetto3;
