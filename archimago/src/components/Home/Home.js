import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import photo1 from "../../assets/photo1.png";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";
import p1 from "../../assets/1.jpg";
import p2 from "../../assets/2.jpg";
import p3 from "../../assets/3.jpg";
import p4 from "../../assets/4.jpg";

function Home() {
  useEffect(() => {
    document.title = "ARCHIMAGO | Home";
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex flex-column justify-content-center align-items-center">
          <Col
            lg={4}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            id="photo1"
          >
            <Image
              src={photo1}
              id="photo"
              className="align-self-center justify-self-center my-5"
            />
          </Col>

          <Col
            lg={4}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            id="photo1"
          >
            <h2 className="font-face-Didot-small h2Home">
              PROGETTAZIONE<br></br>
              COSTRUZIONE<br></br>
              RISTRUTTURAZIONE
            </h2>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col
            lg={4}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-end"
          >
            <Image src={p1} id="p1" className="" />
          </Col>
          <Col lg={4} xs={6} className="pt-3 d-flex ps-lg-0">
            <p className="font-face-FuturaRenner pHome">
              Lo studio <strong>Archimago</strong> svolge la propria attività
              professionale nell’ambito della progettazione integrata e
              sostenibile dal 1999, nascendo quale naturale prosecuzione,
              progresso ed unificazione di singoli studi professionali, con
              l’intento di integrare esperienze e specializzazioni acquisite dai
              singoli professionisti, in modo da poter rispondere in modo
              esaustivo alle sempre più frequenti domande di prestazioni
              specialistiche e globalità di progetto.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col lg={4} xs={6} className="pt-3 d-flex order-lg-1 order-2">
            <p className="font-face-FuturaRenner destra pHome">
              Le esperienze maturate e il percorso formativo e professionale dei
              singoli componenti dello studio, hanno contribuito alla
              definizione di una propria metodologia di progetto, soprattutto
              nell’ambito della architettura sostenibile, basata naturalmente su
              un continuo e costante aggiornamento. Inoltre, al di là delle
              conoscenze specifiche dei singoli professionisti interni alla
              società, mediante collaborazioni avviate con realtà professionali
              legate anche alla progettazione impiantistica e strutturale, lo
              studio è in grado di operare professionalmente in relazione a
              incarichi di progettazione globale e integrata, in ambito di
              grosse commesse pubbliche e private.
            </p>
          </Col>
          <Col
            lg={4}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-start order-lg-2 order-1"
          >
            <Image src={p2} id="p2" className="" />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col
            lg={4}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-end"
          >
            <Image src={p3} id="p3" className="" />
          </Col>
          <Col lg={4} xs={6} className="pt-3 d-flex ps-lg-0">
            <p className="font-face-FuturaRenner pHome">
              I valori che lo studio promuove sono quelli della cultura
              progettuale più avanzata, soprattutto per la sua attenzione alle
              reali esigenze della committenza e dell’ambiente storico e fisico
              nella quale essa si inserisce: la ricerca tecnica e formale di cui
              l’architettura contemporanea ha fatto la propria bandiera.
              <br></br>
              Le logiche che oggi quindi guidano le scelte progettuali di
              archimago si confrontano costantemente con i temi propri dell’alta
              efficienza energetica e sicurezza. Tutto ciò è finalizzato
              all’ottenimento di un elevato livello di qualità ambientale dei
              manufatti edilizi, in linea con i più moderni principi di
              valutazione del livello di sostenibilità.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center">
          <Col lg={4} xs={6} className="pt-3 d-flex order-lg-1 order-2">
            <p className="font-face-FuturaRenner destra pHome">
              Nel corso di oltre un ventennio di attività, lo studio,
              diversificando i settori di intervento (Restauro Monumentale,
              Edilizia Residenziale, Edilizia Scolastica, Impianti Sportivi,
              Energia Rinnovabile…), ha concentrato le sue attenzioni
              soprattutto sull’analisi delle problematiche di carattere
              ambientale, legate al risparmio energetico, approfondendo le
              tematiche ad essi relative e maturando numerose esperienze nella
              progettazione di edifici pubblici e privati, mediante interventi
              che vanno dalla ristrutturazione funzionale e di adeguamento
              normativo, alla nuova costruzione. Inoltre, specie negli ultimi
              anni, grande attenzione è stata riservata allo studio delle
              energie rinnovabili, con particolare riguardo alle implicazioni
              pratiche della loro applicazione nell’ambito delle Pubbliche
              Amministrazioni e di committenti privati.
            </p>
          </Col>
          <Col
            lg={4}
            xs={6}
            className="p-3 me-4 d-flex flex-column align-items-start order-lg-2 order-1"
          >
            <Image src={p4} id="p4" className="" />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
