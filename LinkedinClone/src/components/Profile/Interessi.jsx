import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const Interessi = () => {
  return (
    <Container className="mt-2 border rounded p-0 whiteBg mb-2">
      <Row className="mt-3 p-3">
        <h5>Interessi</h5>
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Aziende">
            <Row>
              <Col xs={1}>
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188434?e=1690416000&v=beta&t=DJk0mQI6EBbEq76mbxP4gCjjBOSTft8IxB7cl-1GNt8"
                  alt=""
                  height={60}
                />
              </Col>
              <Col className="mx-3 mt-2">
                <h6>EPICODE</h6>
                <p>5.575 follower</p>
                <Button variant="transparent" border="secondary">
                  <i class="fas fa-check"></i> Già segui
                </Button>
              </Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Scuole o università">
            <Row>
              <Col xs={1}>
                <img
                  src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188434?e=1690416000&v=beta&t=DJk0mQI6EBbEq76mbxP4gCjjBOSTft8IxB7cl-1GNt8"
                  alt=""
                  height={60}
                />
              </Col>
              <Col className="mx-3 mt-2">
                <h6>EPICODE</h6>
                <p>5.575 follower</p>
                <Button variant="transparent" border="secondary">
                  <i class="fas fa-check"></i> Già segui
                </Button>
              </Col>
            </Row>
          </Tab>
        </Tabs>
      </Row>
    </Container>
  );
};

export default Interessi;
