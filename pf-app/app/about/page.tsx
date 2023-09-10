import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
export default function About() {
  return (
    <>
      {/* MOBILE */}
      <Container fluid className="d-md-none">
        <Row>
          <Col className="d-flex">
            <div className="text-center m-auto">
              <h2 className="fs-1">About</h2>
            </div>
          </Col>
        </Row>
        <div className="bioWrap">
          <Row>
            <p>
              Web developer, passionate about technology and programming.
              <br /> Born and raised in the province of Rome, I have developed
              an increasing interest and knowledge in the digital world, along
              with another great passion : music.
            </p>
          </Row>
          <Row className="align-items-center">
            <Col>
              <p>
                As I grew up, I enjoyed developing small and simple programs .
                Then, while pursuing a degree in Sound Engineering and Technical
                Sound Production, I self-taught myself the fundamentals of web
                development. After graduating, I decided to embark on a
                full-time bootcamp in full stack web development.
              </p>
            </Col>
            <Col
              style={{
                backgroundImage: "url('/assets/cvphoto.jpg')",
                backgroundPosition: "center",
                backgroundSize: "cover",
                borderRadius: "24px",
                height: "300px",
              }}
              className="me-2"
            ></Col>
          </Row>
          <Row>
            <p>
              Currently, I am actively seeking job opportunities as a front-end
              and/or back-end developer. I am continuously learning new
              technologies and building a personal network of collaborators.
            </p>
          </Row>
        </div>
      </Container>
      {/* DESKTOP */}
      <Container className="d-none d-md-flex h-100 align-items-center">
        <Row className="justify-content-center">
          <Col md={8} lg={6}>
            <p>
              Web developer, passionate about technology and programming.
              <br /> Born and raised in the province of Rome, I have developed
              an increasing interest and knowledge in the digital world, along
              with another great passion : music. As I grew up, I enjoyed
              developing small and simple programs . Then, while pursuing a
              degree in Sound Engineering and Technical Sound Production, I
              self-taught myself the fundamentals of web development. After
              graduating, I decided to embark on a full-time bootcamp in full
              stack web development. Currently, I am actively seeking job
              opportunities as a front-end and/or back-end developer. I am
              continuously learning new technologies and building a personal
              network of collaborators.
            </p>
          </Col>
          <Col
            md={3}
            lg={2}
            style={{
              backgroundImage: "url('/assets/cvphoto.jpg')",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "24px",
              height: "300px",
            }}
          ></Col>
        </Row>
      </Container>
    </>
  );
}
