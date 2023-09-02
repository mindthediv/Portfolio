import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const Rightside1 = () => {
  return (
    <Card className="mb-3">
      <ListGroup variant="list-group-flush">
        <ListGroup.Item>Modifica il profilo pubblico e l'URL</ListGroup.Item>
        <ListGroup.Item>
          Aggiungi il tuo profilo in un'altra lingua
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Rightside1;
