import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const ShortNews = () => {
  return (
    <Card className="">
      <Container id="listaNotizie">
        <ul className="px-3 pt-2">
          <h5 className="mt-2">Linkedin Notizie</h5>

          <li active>
            <a href="">
              {" "}
              <b>Le Top Companies del 2023 in Italia</b> <br />
              Notizie principali • 986 lettori
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <b>Arrivano i tutor in classe</b> <br />
              20 ore fa
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <b>Tassi sui mutui al 4%</b> <br />
              22 ore fa • 336 lettori
            </a>
          </li>
          <li>
            <a href="">
              {" "}
              <b>Apple sfida le banche</b> <br />1 giorno fa • 280 lettori
            </a>
          </li>
          <li>
            <a href="">
              <b>Che cosa succede al Salone del Mobile</b> <br />
              18 ore fa • 462 lettori
            </a>
          </li>
        </ul>
        <hr />
        <p className="mx-3">Visualizza altro</p>
      </Container>
    </Card>
  );
};

export default ShortNews;
