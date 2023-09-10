"use client";

import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function NavBar() {
  return (
    <Container fluid id="navBar">
      <Row className="p-2">
        <Col className="d-flex justify-content-between w-100 p-0">
          <Link href={"/about"}>
            <i className="bi bi-fingerprint"></i>
          </Link>
          <Link href={"/"}>
            <i className="bi bi-geo-fill"></i>
          </Link>
          <Link href={"/works"}>
            <i className="bi bi-boxes"></i>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
