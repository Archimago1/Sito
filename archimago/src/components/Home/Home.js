import React from "react";
import NavBar from "../Navbar/Navbar.js";
import Footer from "../Footer/Footer.js";

import { Container, Row, Col, Image, Button, Stack } from "react-bootstrap";
import "./styles.css";

function Home() {
  return (
    <>
      <NavBar />
      
      <Footer />
    </>
  );
}

export default Home;