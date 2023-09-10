import { Container, Col, Row } from "react-bootstrap";
import WorksCarousel from "../(components)/carousel";
import works from "../(data)/works";

export default function Works() {
  return (
    <Container className="h-100">
      <h2 className="text-center d-sm-none">Works</h2>
      <div className="worksWrap p-3">
        {works.map((box) => {
          return (
            <>
              {/* MOBILE */}
              <div className="d-sm-none">
                <Row
                  className="d-flex rounded my-3 caseRow"
                  style={{
                    backgroundImage: box.img,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <Row className="worksRow rounded g-0 py-2">
                    <Col xs={4} lg={2} className="p-1">
                      <div className="workBox d-flex">
                        <h3 className="ps-2">{box.title}</h3>
                      </div>
                    </Col>
                  </Row>
                </Row>
                <Row>
                  <Col>
                    <p className="ps-2 h-100">{box.caption}</p>
                    <a href={box.repo} target="_blank">
                      <h5>See on GitHub</h5>
                    </a>
                  </Col>
                </Row>
              </div>
            </>
          );
        })}
        <div className="d-none d-sm-block">
          <Row className="rounded py-2 m-0 justify-content-evenly">
            {works.map((box) => {
              return (
                <>
                  <Col xs={4} lg={4} className="p-1">
                    <div
                      className="workBox d-flex"
                      style={{
                        backgroundImage: box.img,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        margin: "auto",
                      }}
                    >
                      <div className="h-100 w-100 blurrer d-flex align-items-center">
                        <h3 className="ps-2 workH3">{box.title}</h3>
                      </div>
                    </div>
                    <p className="p-2 text-center mb-0">{box.caption}</p>
                    <a href={box.repo} target="_blank">
                      <h5 className="text-center">See on GitHub</h5>
                    </a>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </Container>
  );
}
