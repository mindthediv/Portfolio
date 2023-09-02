import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MiniProfile = () => {
  const user = useSelector((state) => state.profile.content);

  return (
    <Card className="align-item-center mb-3">
      <div className="rounded">
        <svg
          xmlns={user.image}
          viewBox="0 0 552 138"
          id="person-default"
          data-supported-dps="2048x512"
        >
          <path fill="none" d="M0 0h552v138H0z" />
          <path fill="#d9e5e7" d="M0 0h552v138H0z" />
          <path fill="#bfd3d6" d="M380 0h172v138H380z" />
          <path
            d="M333.22 0H0v138h333.22a207.93 207.93 0 000-138z"
            fill="#a0b4b7"
          />
        </svg>
      </div>
      <img
        className="rounded-circle text-center"
        height={60}
        width={60}
        src={user.image}
        alt="img-profile"
        id="fotoMiniJumbotron"
      />
      <Card.Body className="text-center">
        <Card.Title>
          {user.name} {user.surname}
        </Card.Title>
        <Card.Text>experiense</Card.Text>
      </Card.Body>
      <ListGroup
        id="listaJumbotronHome"
        className="miniProfile list-group-flush d-none d-md-inline"
      >
        <ListGroup.Item action>
          <Row>
            <Col>
              Collegamenti <br />
              <b>Espandi la tua rete</b>
            </Col>
            <Col xs={3} className="text-end">
              438
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action>
          <Row>
            <Col>Chi ha visitato il tuo profilo?</Col>
            <Col xs={3} className="text-end">
              172
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item action>
          Accedi a strumenti e informazioni in esclusiva <br />{" "}
          <a href="#">Prova Premium gratis</a>
        </ListGroup.Item>
        <ListGroup.Item action>
          <i class="fas fa-bookmark"></i> I miei elementi
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default MiniProfile;
