import React from "react";
import NavBar from "../../Navbar/Navbar.js";
import Footer from "../../Footer/Footer.js";

import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css";

import PH1 from "../../../assets/8-1.jpg";
import PH2 from "../../../assets/8-2.jpg";
import PH3 from "../../../assets/8-3.jpg";
import PH4 from "../../../assets/8-4.jpg";
import PH5 from "../../../assets/8-5.jpg";
import PH6 from "../../../assets/8-6.jpg";
import PH7 from "../../../assets/8-7.jpg";
import PH8 from "../../../assets/8-8.jpg";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function Progetto8() {
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
              APPARTAMENTO PRIVATO A TORINO
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
            <p className="font-face-FuturaRenner p-progetto">2019</p>
          </Col>

          <Col
            lg={3}
            xs={6}
            className="p-0 d-flex flex-column align-items-center"
          >
            <h5 className="font-face-Didot-progetti mt-3">WHAT</h5>
            <p className="font-face-FuturaRenner p-progetto">
              Interventi di manutenzione straordinaria
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
                  Pianta delle demolizioni
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH3} id="pc3" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Pianta delle nuove costruzioni
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH4} id="pc4" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Ipotesi di progetto</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH5} id="pc5" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  3D dell'ipotesi di progetto
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH6} id="pc6" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Vista sulla nuova cucina
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH7} id="pc7" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">Il nuovo bagno</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Image src={PH8} id="pc8" className="carouselImage d-block" />
              <Carousel.Caption>
                <p className="font-face-FuturaRenner">
                  Particolare dell'armadio all'ingresso
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Row>

        <Row className="mt-4 d-flex justify-content-center">
          <p className="font-face-FuturaRenner pDescrizioneProgetto">
            Il progetto di ristrutturazione prevede un intervento completo
            sull’unità immobiliare, con l’obiettivo di migliorare sia
            l’efficienza energetica che il comfort abitativo, oltre a integrare
            soluzioni tecnologiche avanzate.<br></br>
            <hr></hr>
            Si partirà dal rinnovamento generale delle finiture interne,
            sostituendo pavimenti, rivestimenti e tinteggiature per conferire
            agli ambienti un aspetto moderno ed elegante. Parallelamente,
            verranno sostituiti gli infissi con nuovi serramenti ad alte
            prestazioni, capaci di migliorare l’isolamento termico e acustico,
            contribuendo così a una riduzione dei consumi energetici.<br></br>
            <hr></hr>
            L’impianto idraulico sarà oggetto di un adeguamento significativo,
            con la realizzazione di nuovi attacchi idrici e l’installazione di
            un boiler per la produzione di acqua calda sanitaria, alimentato sia
            da un nuovo attacco gas che da una caldaia di ultima generazione. A
            supporto del sistema di riscaldamento, saranno inoltre effettuate
            modifiche all’impianto termico esistente, incluse le colonne di
            distribuzione, per garantire una maggiore efficienza e uniformità
            nella diffusione del calore.<br></br>
            <hr></hr>
            Per migliorare il comfort climatico dell’abitazione, verrà
            realizzato un impianto di condizionamento canalizzato ad aria, che
            permetterà una distribuzione ottimale della temperatura in tutti gli
            ambienti.<br></br>
            <hr></hr>
            Un altro aspetto fondamentale della ristrutturazione riguarderà
            l’aggiornamento dell’impianto elettrico, con la posa di un nuovo
            sistema che rispetti le normative vigenti in termini di sicurezza e
            prestazioni. A questo si affiancherà l’installazione di un impianto
            di domotica, che consentirà il controllo automatizzato di vari
            dispositivi domestici, come illuminazione, riscaldamento,
            climatizzazione e sicurezza, migliorando la gestione e l’efficienza
            energetica della casa.<br></br>
            <hr></hr>
            Nel complesso, questi interventi renderanno l’abitazione più
            moderna, funzionale ed efficiente, migliorandone sia il valore che
            la qualità della vita al suo interno.
          </p>
        </Row>

        <Row className="mt-5 d-flex justify-content-between">
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
              to="/progetti/progetto9"
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

export default Progetto8;
