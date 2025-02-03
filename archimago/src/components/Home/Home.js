import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";
import photo1 from "../../assets/photo1.png";

import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles.css";

function Home() {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="d-flex justify-content-center align-items-center">
          <Col
            lg={4}
            xs={12}
            className="d-flex justify-content-center align-items-center"
            id="photo1"
          >
            <Image
              src={photo1}
              id="photo"
              className="align-self-center justify-self-center"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Home;
