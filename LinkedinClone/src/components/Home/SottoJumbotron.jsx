import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const SottoJumbotron = () => {
  const user = useSelector((state) => state.profile.content);

  return (
    <Card className="align-item-center mb-3">
      <ListGroup
        id="sottoJumbotron"
        className="list-group-flush d-none d-md-inline"
      >
        <ListGroup.Item action>
          <a href="#">Recenti</a>
        </ListGroup.Item>
        <ListGroup.Item action>
          <a href="#">Gruppi</a>
        </ListGroup.Item>
        <ListGroup.Item action>
          <a href="#">Eventi</a>
        </ListGroup.Item>
        <ListGroup.Item action>
          <a href="#">Hashtag seguiti</a>
        </ListGroup.Item>
        <ListGroup.Item action className="text-center py-2 my-1">
          Scopri di più
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default SottoJumbotron;
