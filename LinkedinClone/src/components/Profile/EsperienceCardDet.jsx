import { Card, Row } from "react-bootstrap/esm";
import CardHeader from "react-bootstrap/esm/CardHeader";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ExpModalPost from "./ExpModalPost";
import ExpModalPutDel from "./ExpModalPutDel";
import { Col } from "react-bootstrap";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
const EsperienceCardDet = (props) => {
  const user = useSelector((state) => state.profile.content);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modal2IsOpen, setModal2IsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function openModal2() {
    setModal2IsOpen(true);
  }
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  function closeModal2() {
    setModal2IsOpen(false);
  }
  return (
    <Card className="my-3">
      {console.log(props.exp._id)}
      <CardHeader className="whiteBg fw-bold d-flex justify-content-between align-items-center">
        Esperienze
        <div>
          <svg
            onClick={openModal}
            xmlns="http://www.w3.org/2000/svg"
            data-toggle="modal"
            data-target="#PostExpModal"
            width="35"
            height="35"
            fill="currentColor"
            className="bi bi-plus-lg mx-2 p-1 hover"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
            />
          </svg>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ExpModalPost closeModal={closeModal} />
          </Modal>

          <svg
            onClick={openModal2}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            data-toggle="modal"
            data-target="#PutDelExpModal"
            fill="currentColor"
            className="bi bi-pencil mx-2 p-1 hover"
            viewBox="0 0 16 16"
          >
            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
          </svg>
          <Modal
            isOpen={modal2IsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal2}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ExpModalPutDel expId={props.exp._id} closModal2={closeModal2} />
          </Modal>
        </div>
      </CardHeader>
      <Row>
        <Col
          xs={2}
          className="d-flex justify-content-center align-items-center"
        >
          <img
            className="rounded-circle"
            src={user.image}
            style={{ width: "50px" }}
            alt=""
          />
        </Col>
        <Col>
          {" "}
          <Card.Body>
            <Card.Title> {props.exp.role} </Card.Title>
            <Card.Text className="m-0">{props.exp.description}</Card.Text>
            <Card.Text className="m-0">{props.exp.company}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default EsperienceCardDet;
