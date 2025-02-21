import React, { useEffect } from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";
import paola from "../../assets/paola.jpg";
import alfonso from "../../assets/alfonso.jpg";
import cristina from "../../assets/cristina.jpg";

function Team() {
  useEffect(() => {
    document.title = "ARCHIMAGO | Team";
  }, []);

  return (
    <>
      <NavBar />
      <Container>
        <Row className="mt-5 d-flex justify-content-center">
          <Col lg={8} xs={6} className="p-3 d-flex">
            <h1 className="font-face-Didot">TEAM</h1>
          </Col>
        </Row>

        <Row className="mb-5 d-flex justify-content-center" id="amione">
          <Col
            lg={4}
            xs={12}
            className="p-3 me-lg-4 d-flex flex-column align-items-lg-end align-items-center"
          >
            <h1 className="font-face-Didot-small d-flex flex-column justify-content-lg-end align-content-lg-end align-items-lg-end h1Team">
              Paola Serena <strong>AMIONE</strong>
            </h1>
            <Image src={paola} id="photo1" className="mt-3" />
          </Col>
          <Col lg={4} xs={6} className="p-3 d-flex flex-column">
            <p className="font-face-FuturaRenner m-0 ruolo">
              <strong>SOCIO Arch.</strong>
            </p>
            <hr></hr>
            <p className="font-face-FuturaRenner m-0 parTeam">
              Nata a Torino il 24/01/1966.<br></br>
              Laurea in Architettura presso il Politecnico di Torino con tesi
              "Porta Nuova: futuro nodo intermodale" - rel. Prof. C. Vaglio
              Bernè.<br></br>
              Iscritta all'Ordine degli Architetti Pianificatori Paesaggisti e
              Conservatori della Provincia di Torino n. 4329.<br></br>
              Consulente Tecnico del Giudice per il Tribunale di Ivrea.<br></br>
              Membro della Commissione di Urbanistica dell'Ordine degli
              Architetti della Provincia di Torino.
            </p>
            <p className="font-face-FuturaRenner mt-3">
              Qualifiche conseguite:
              <ul>
                <li>
                  Coordinatore in materia di sicurezza e di salute durante la
                  progettazione ed esecuzione dell'opera (D.lgs. 494/96)
                  Organizzato da: Collegio Periti Industriali della Provincia di
                  Torino, 1997
                </li>
                <li>
                  Corso di aggiornamento della durata di 40 ore sulla sicurezza
                  e salute nei cantieri temporanei o mobili organizzato
                  dall'Ordine degli Architetti, Pianificatori, Paesaggisti,
                  Conservatori della Provincia di Torino, ai sensi dell'allegato
                  XIV del D.Lgs. 81/2008
                </li>
                <li>
                  Corso di Specializzazione di Prevenzione Incendi, ai sensi
                  dell'art. 3 del D.M. 25/03/1985. Organizzato da: Ordine degli
                  architetti della Provincia di Torino, 1999
                </li>
              </ul>
            </p>
            <p className="font-face-FuturaRenner m-0 parTeam">
              Iscritta negli elenchi del Ministero degli Interni ai sensi della
              L. 818/84 al n. TO04329A00758
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center" id="faienza">
          <Col
            lg={4}
            xs={6}
            className="p-3 d-flex flex-column justify-content-lg-end align-content-lg-end align-items-lg-end order-lg-1 order-2"
          >
            <p className="font-face-FuturaRenner m-0 ruolo">
              <strong>SOCIO Arch.</strong>
            </p>
            <hr></hr>
            <p className="font-face-FuturaRenner destra m-0 parTeam">
              Nato a Torremaggiore (FG) il 29/10/1964.<br></br>
              Laurea in Architettura presso il Politecnico di Torino con tesi "
              Ipotesi progettuali e proposte di intervento in ambiti urbani di
              interesse storico: piazza S. Giovanni e la Porta Palatina " - rel.
              Prof. Agostino Magnaghi.<br></br>
              Iscritto all'Ordine degli Architetti Pianificatori Paesaggisti e
              Conservatori della Provincia di Torino n.4029.<br></br>
              Membro della Commissione Igienico-Edilizia come esperto per
              l'Impatto Ambientale nel Comune di Druento (TO) dal 2000 al 2004.
            </p>
            <p className="font-face-FuturaRenner destra mt-3 parTeamLista">
              Qualifiche conseguite:
              <ul>
                <li>
                  Coordinatore in materia di sicurezza e di salute durante la
                  progettazione ed esecuzione dell'opera (D.lgs. 494/96).
                  Organizzato da: Collegio Periti Industriali della Provincia di
                  Torino, 1997
                </li>
                <li>
                  Corso di Specializzazione di Prevenzione Incendi, ai sensi
                  dell'art. 3 del D.M. 25/03/1985. Organizzato da: Ordine degli
                  architetti della Provincia di Torino, 1999
                </li>
              </ul>
            </p>
            <p className="font-face-FuturaRenner destra m-0 parTeam">
              Iscritto negli elenchi del Ministero degli Interni ai sensi della
              L. 818/84 al n. TO04029A00759
            </p>
          </Col>
          <Col
            lg={4}
            xs={12}
            className="p-3 me-lg-4 d-flex flex-column align-items-lg-start align-items-center order-lg-2 order-1"
          >
            <h1 className="font-face-Didot-small d-flex flex-column justify-content-start align-content-lg-start align-items-lg-start h1Team">
              Alfonso <strong>FAIENZA</strong>
            </h1>
            <Image src={alfonso} id="photo2" className="mt-3" />
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-center" id="politano">
          <Col
            lg={4}
            xs={12}
            className="p-3 me-lg-4 d-flex flex-column align-items-lg-end align-items-center"
          >
            <h1 className="font-face-Didot-small d-flex flex-column justify-content-end align-content-lg-end align-items-lg-end h1Team">
              Cristina <strong>POLITANO</strong>
            </h1>
            <Image src={cristina} id="photo3" className="mt-3" />
          </Col>
          <Col lg={4} xs={6} className="p-3 d-flex flex-column">
            <p className="font-face-FuturaRenner m-0 ruolo">
              <strong>COLLABORATRICE Dott.ssa in Arch.</strong>
            </p>
            <hr></hr>
            <p className="font-face-FuturaRenner m-0 parTeam">
              Nata a Copertino (LE) il 26/09/1984.<br></br> Nel 2010 ha
              conseguito la Laurea magistrale in Architettura presso la Facoltà
              di Architettura del Politecnico di Torino con tesi di laurea
              "Progetto di una scuola per l'infanzia ecocompatibile a
              Bisceglie", Rel. Prof.ssa S. Gron, correlatore Prof. V. Manni.
              <br></br> Dal 2011 è dipendente stabile dello Studio Archimago.
              <br></br> All'interno dello studio si occupa della redazione di
              elaborati grafici progettuali, relazioni tecnico illustrative,
              computi metrici estimativi, quadri economici, capitolati
              d'appalto, piani di manutenzione, piani di sicurezza e
              coordinamento, rilievi, assistenza alla D.L. e al C.S.E., cura
              delle relazioni con la committenza pubblica e privata, cura delle
              relazioni con le imprese e le maestranze.
            </p>
          </Col>
        </Row>

        <Row className="mt-5 mb-5 d-flex justify-content-start" id="politano">
          <p className="font-face-FuturaRenner fine">
            Lo studio si avvale inoltre di collaborazioni esterne per
            progettazioni strutturali e impiantistiche.
          </p>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

export default Team;
