import { Container, Col, Row, Button } from "react-bootstrap";

const Risorse = () => {
  return (
    <>
      <div className="whiteBg border rounded mt-2 ">
        <div className="py-2 px-3">
          <h5 className="mt-3">Risorse</h5>
          <p>
            <i className="fas fa-eye pe-1"></i>
            Solo per te
          </p>
          <Row>
            <Col xs={1}>
              <i class="fas fa-broadcast-tower ms-2"></i>{" "}
            </Col>
            <Col xs={11}>
              <p>
                <b>Modalità creazione di contenuti</b>{" "}
                <Button variant="dark" className="p-0 px-1">
                  No
                </Button>
                <br />
                Fatti scoprire, metti in risalto i contenuti sul tuo profilo e
                accedi agli strumenti di creazioneFatti scoprire, metti in
                risalto i contenuti sul tuo profilo e accedi agli strumenti di
                creazione
              </p>
            </Col>
            <hr />
            <Col xs={1}>
              <i className="fas fa-user-friends ms-2"></i>
            </Col>
            <Col xs={11}>
              <p>
                <b>La mia rete</b> <br />
                Salva e gestisci i tuoi collegamenti e interessi.
              </p>
            </Col>
          </Row>
        </div>
        <button className="ButtonMostraRisorse border-top btn btn-light d-flex justify-content-center align-items-center">
          Mostra tutte le risorse
        </button>
      </div>
    </>
  );
};
export default Risorse;
