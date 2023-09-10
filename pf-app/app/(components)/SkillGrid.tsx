"use client";

import { Col, Container, Row } from "react-bootstrap";

export default function SkillGrid() {
  const skillArray = [
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg",
    "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg",
    "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  ];

  return (
    <Container className="my-4">
      <Row>
        {skillArray.map((skill) => {
          return (
            <Col
              xs={2}
              sm={3}
              md={2}
              className="square m-1"
              style={{
                backgroundImage: `url(${skill} )`,
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            ></Col>
          );
        })}
      </Row>
    </Container>
  );
}
