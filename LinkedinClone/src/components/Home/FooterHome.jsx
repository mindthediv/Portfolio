import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const FooterHome = () => {
  return (
    <Container fluid className="my-3">
      <Row className="text-center flex-column">
        <Col>
          <Link
            className="collegamenti"
            to={"https://about.linkedin.com/it-it"}
          >
            Informazioni
          </Link>
          <Link
            to={
              "https://it.linkedin.com/accessibility?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bru6up1A6Seq3bJvMtE7iUQ%3D%3D"
            }
            className="collegamenti"
          >
            Accessibilità
          </Link>
        </Col>
        <Col>
          <Link
            className="collegamenti"
            to={
              "https://it.linkedin.com/legal/professional-community-policies?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3B3a9FOjJ0SruxU5CEqVrPEQ%3D%3D"
            }
          >
            Centro assistenza
          </Link>
          <Link className="collegamenti">Privacy e condizioni</Link>
        </Col>
        <Col>
          <Link
            to={"https://mobile.linkedin.com/it-it"}
            className="collegamenti"
          >
            Opzioni per gli annunci pubblicitari
          </Link>
        </Col>
        <Col>
          <Link
            to={"https://mobile.linkedin.com/it-it"}
            className="collegamenti"
          >
            Pubblicità
          </Link>
          <Link to={"https://careers.linkedin.com/"} className="collegamenti">
            Servizi alle aziende
          </Link>
        </Col>

        <Col>
          <Link
            to={
              "https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer"
            }
            className="collegamenti"
          >
            Scarica l'app Linkedin
          </Link>
          <Link to={"https://safety.linkedin.com/"} className="collegamenti">
            Altro{" "}
          </Link>
        </Col>
      </Row>
      <Row className="my-2 text-center">
        <p className="footerQuestion">
          <img
            src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2019-700x175.png"
            alt=""
            height={15}
          />{" "}
          LinkedIn Corporation © 2023
        </p>
      </Row>
    </Container>
  );
};

export default FooterHome;
