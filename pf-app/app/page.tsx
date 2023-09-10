"use client";

import { Container, Col, Row } from "react-bootstrap";
import WorksCarousel from "./(components)/carousel";
import Info from "./(components)/Info";
import Header from "./(components)/Header";

export default function Home() {
  return (
    <Container
      fluid
      className="h-100 d-flex flex-column align-items-evenly justify-content-center"
    >
      <Row className="d-flex align-items-center justify-content-center ">
        <Header />
      </Row>
      <Row className="my-4 mb-2">
        <Col>
          <Info />
        </Col>
      </Row>
      {/* <Row className="d-none d-sm-flex justify-content-end">
        <Col xs={6}>
          <WorksCarousel />
        </Col>
      </Row> */}
    </Container>
  );
}
