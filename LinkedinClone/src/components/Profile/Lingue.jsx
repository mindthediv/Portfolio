import { Container, Row } from "react-bootstrap";

const Lingue = () => {
  return (
    <div className="whiteBg border rounded mt-2 ">
      <div className="py-2 px-3">
        <h5 className="mt-3">Lingue</h5>
        <div>
          <h6 className="mb-1">Inglese</h6>
          <p>Conoscenze lavorativa limitata</p>
        </div>
        <hr />
        <div>
          <h6 className="mb-1">Italiano</h6>
          <p>Conoscenze madrelingua o bilingue</p>
        </div>
      </div>
    </div>
  );
};

export default Lingue;
