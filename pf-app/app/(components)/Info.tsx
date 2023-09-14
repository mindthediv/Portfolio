"use client";
import { Col, Container, Row } from "react-bootstrap";
import SkillGrid from "./SkillGrid";
import Link from "next/link";

export default function Info() {
  return (
    <Container fluid id="contact-info">
      <Row className="justify-content-center">
        <Col
          xs={12}
          md={5}
          className="d-flex flex-column justify-content-center mb-4 p-0 py-3"
        >
          <Link href={"/"}>
            <i className="bi bi-envelope me-4 fs-3"></i>
            gabriele.p.devcontact@gmail.com
          </Link>
          <Link href={"/"} className="my-3">
            <i className="bi bi-github me-4 fs-3"></i>
            /mindthediv
          </Link>
          <Link href={"/"}>
            <i className="bi bi-linkedin me-4 fs-3"></i>
            Gabriele Pagliaricci
          </Link>
        </Col>
        <Col xs={12} sm={8} md={4}>
          <SkillGrid />
        </Col>
      </Row>
    </Container>
  );
}
