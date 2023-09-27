"use client";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function NavBar() {
  return (
    <Container fluid id="navBar">
      <Row className="p-2">
        <Col className="d-flex justify-content-between w-100 p-0">
          <Link href={"/about"} className="text-center">
            <i className="bi bi-fingerprint"></i>
            <p>About</p>
          </Link>
          <Link href={"/"} className="text-center">
            <i className="bi bi-geo-fill"></i>
            <p>Contacts</p>
          </Link>
          <Link href={"/works"} className="text-center">
            <i className="bi bi-boxes"></i>
            <p>Works</p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
