import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const Collegamenti = () => {
  return (
    <Card>
      <Card.Header>Altri profili consultati</Card.Header>
      <Card.Body>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Card.Title>Nome Cognome</Card.Title>
            <Card.Text>experience</Card.Text>
            <button className="btn rounded-pill border border-dark">
              <i class="fas fa-user-plus"></i> Collegati
            </button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Collegamenti;
