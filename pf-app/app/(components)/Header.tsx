import { Col, Container, Row } from "react-bootstrap";

export default function Header() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xs={12} md={5} className="d-flex flex-column p-0 headCol">
          <h1>Gabriele Pagliaricci</h1>
          <h4 className="py-2">Full Stack Web Developer</h4>
        </Col>
        <Col xs={12} md={4} className="d-flex align-items-center">
          <h3 className="my-btn p-3 m-auto">Download CV</h3>
        </Col>
      </Row>
    </Container>
  );
}
