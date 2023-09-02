import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Collapse from "react-bootstrap/Collapse";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Offcanvas from "react-bootstrap/Offcanvas";

const NavBar = () => {
  const user = useSelector((state) => state.profile.content);
  const logged = useSelector((state) => state.login.isLogged);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar bg="light" id="navBar">
      <Container>
        <Nav className="my-2 my-lg-0 w-100" style={{ maxHeight: "50px" }}>
          <Row className="justify-content-between w-100 align-item-center">
            <Col className="d-flex">
              <Link to={"/home"} className="me-2 my-1">
                <img
                  src="https://icon2.cleanpng.com/20180320/rbe/kisspng-linkedin-computer-icons-social-media-professional-png-linkedin-transparent-5ab1766dcafc38.5216273615215796298314.jpg"
                  height={35}
                  alt=""
                />
              </Link>
              <Form className="my-1 ">
                <Form.Control
                  type="search"
                  placeholder="Cerca"
                  className="me-2"
                  aria-label="Cerca"
                />
              </Form>
            </Col>
            <Col className="d-flex">
              <Link
                to={"/home"}
                className="text-decoration-none my-2 mx-2 text-dark d-flex flex-column"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 576 512"
                >
                  <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L512 185V64c0-17.7-14.3-32-32-32H448c-17.7 0-32 14.3-32 32v36.7L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32v69.7c-.1 .9-.1 1.8-.1 2.8V472c0 22.1 17.9 40 40 40h16c1.2 0 2.4-.1 3.6-.2c1.5 .1 3 .2 4.5 .2H160h24c22.1 0 40-17.9 40-40V448 384c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32v64 24c0 22.1 17.9 40 40 40h24 32.5c1.4 0 2.8 0 4.2-.1c1.1 .1 2.2 .1 3.3 .1h16c22.1 0 40-17.9 40-40V455.8c.3-2.6 .5-5.3 .5-8.1l-.7-160.2h32z" />
                </svg>
                <p className="d-none d-lg-inline">Home</p>
              </Link>
              <Nav.Link href="#action2" className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 640 512"
                >
                  <path d="M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z" />
                </svg>
                <p className="d-none d-lg-inline">Rete</p>
              </Nav.Link>
              <Nav.Link href="#action2" className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 512 512"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                </svg>
                <p className="d-none d-lg-inline">Lavoro</p>
              </Nav.Link>
              <Nav.Link href="#action2" className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 512 512"
                >
                  <path d="M256 448c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9c-5.5 9.2-11.1 16.6-15.2 21.6c-2.1 2.5-3.7 4.4-4.9 5.7c-.6 .6-1 1.1-1.3 1.4l-.3 .3 0 0 0 0 0 0 0 0c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c28.7 0 57.6-8.9 81.6-19.3c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9zM128 208a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm96 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z" />
                </svg>
                <p className="d-none d-lg-inline">Messaggistica</p>
              </Nav.Link>
              <Nav.Link href="#action2" className="d-flex flex-column">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height={20}
                  viewBox="0 0 448 512"
                >
                  <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
                </svg>
                <p className="d-none d-lg-inline">Notifiche</p>
              </Nav.Link>
              <DropdownButton
                drop="down-centered"
                variant="transparent"
                id="dropdown-button-drop-down-center"
                title={
                  <div>
                    <img
                      src={user.image}
                      height={25}
                      className="rounded"
                      alt="1"
                    ></img>
                  </div>
                }
                size="sm"
                className="mx-2"
              >
                <Dropdown.Item>
                  <Row>
                    <Col xs={2}>
                      <img src={user.image} height={40} alt="" />
                    </Col>
                    <Col>
                      <h4>
                        {user.name} {user.surname}
                      </h4>
                    </Col>
                  </Row>
                  <Button
                    className="w-100 my-2"
                    onClick={() => {
                      navigate("/me");
                    }}
                  >
                    Visualizza profilo
                  </Button>
                </Dropdown.Item>
                <Dropdown.Divider />
                <div className="mx-3">
                  <h5>Account</h5>
                </div>
                <Dropdown.Item>Prova Premium gratis</Dropdown.Item>
                <Dropdown.Item>Impostazioni e privacy</Dropdown.Item>
                <Dropdown.Item>Guida</Dropdown.Item>
                <Dropdown.Item>Lingua</Dropdown.Item>
                <Dropdown.Divider />
                <div className="mx-3">
                  <h5>Gestisci</h5>
                </div>
                <Dropdown.Item>Post e attività</Dropdown.Item>
                <Dropdown.Item>
                  Account per la pubblicazione di offer...
                </Dropdown.Item>
                <Dropdown.Item>Esci</Dropdown.Item>
              </DropdownButton>

              <div className="vr " id="barraVerticale" />
              <div className="mb-2 text-center">
                <Button
                  variant="transparent"
                  className="border-0 "
                  onClick={handleShow}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height={20}
                    viewBox="0 0 512 512"
                    id="dropdownNavbar2"
                  >
                    <path d="M149.333 56v80c0 13.255-10.745 24-24 24H24c-13.255 0-24-10.745-24-24V56c0-13.255 10.745-24 24-24h101.333c13.255 0 24 10.745 24 24zm181.334 240v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm32-240v80c0 13.255 10.745 24 24 24H488c13.255 0 24-10.745 24-24V56c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24zm-32 80V56c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.256 0 24.001-10.745 24.001-24zm-205.334 56H24c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24zM0 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H24c-13.255 0-24 10.745-24 24zm386.667-56H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zm0 160H488c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H386.667c-13.255 0-24 10.745-24 24v80c0 13.255 10.745 24 24 24zM181.333 376v80c0 13.255 10.745 24 24 24h101.333c13.255 0 24-10.745 24-24v-80c0-13.255-10.745-24-24-24H205.333c-13.255 0-24 10.745-24 24z" />
                  </svg>
                  <p className="d-none d-lg-block">
                    <nobr>Per le aziende</nobr>
                  </p>
                </Button>
                <Offcanvas show={show} placement="end" onHide={handleClose}>
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Per le aziende</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Card className="offCanvasNavbar mb-2">
                      <Card.Header>Scopri altri prodotti Linkedin</Card.Header>
                      <Card.Body>
                        <Card.Text className="text-center">
                          <Row id="perLeAziende">
                            <Col xs={3}>
                              <i class="far fa-play-circle">
                                {" "}
                                <p>
                                  <b>Learnig</b>
                                </p>
                              </i>
                            </Col>
                            <Col xs={3}>
                              <i class="far fa-chart-bar">
                                <p>
                                  <b>Insights</b>
                                </p>
                              </i>
                            </Col>
                            <Col xs={3}>
                              <i class="fas fa-clipboard">
                                <p>Pubblica un'offerta di lavoro</p>
                              </i>
                            </Col>
                            <Col xs={3}>
                              <i class="fas fa-compass">
                                <p>
                                  <nobr>Pubblicizza</nobr>
                                </p>
                              </i>
                            </Col>
                            <Col xs={3}>
                              <i class="fas fa-compass">
                                {" "}
                                <p>Trova lead</p>
                              </i>
                            </Col>
                            <Col xs={3}>
                              <i class="fas fa-users">
                                {" "}
                                <p>Gruppi</p>
                              </i>
                            </Col>
                            <Col xs={3}>
                              <i class="fas fa-check">
                                {" "}
                                <p>Marketplace dei servizi</p>
                              </i>
                            </Col>
                          </Row>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <Card className="offCanvasNavbar">
                      <Card.Header>
                        Assistenza alle aziende di Linkedin
                      </Card.Header>
                      <Card.Body>
                        <Card.Text>
                          <b>Talent Solutions</b>
                          <br />
                          Trova, attrai e assumi
                        </Card.Text>
                        <Card.Text>
                          <b>Sales Solutions</b>
                          <br />
                          Sblocca nuove opportunità di vendita
                        </Card.Text>
                        <Card.Text>
                          <b>Pubblica offerta di lavoro gratuita</b>
                          <br />
                          Raggiungi i migliori candidati con la tua offerta di
                          lavoro
                        </Card.Text>
                        <Card.Text>
                          <b>Marketing Solutions</b>
                          <br />
                          Acquisisci clienti e fai crescere la tua azienda
                        </Card.Text>
                        <Card.Text>
                          <b>Learning Solutions Solutions</b>
                          <br />
                          Promuovi l'acquisizione di competenze nella tua
                          organizzazione
                        </Card.Text>
                        <hr />
                        <Card.Text>
                          <b>Crea una pagina aziendale +</b>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Offcanvas.Body>
                </Offcanvas>
              </div>
            </Col>
          </Row>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
