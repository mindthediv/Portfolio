import { Button, Card, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Spinner } from "react-bootstrap/esm";

import { profileThunk, team } from "../../redux/actions";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Modal from "react-modal";
import { openModal } from "./EsperienceCardDet";
const Jumbotron = ({ userLink }) => {
  const user = useSelector((state) => state.profile.content);
  const loading = useSelector((state) => state.profile.loading);
  let id = useSelector((state) => state.profile.content._id);
  const API_URL_PROFILE_PHOTO = `https://striveschool-api.herokuapp.com/api/profile/${id}/picture`;
  const [fd, setFd] = useState(new FormData());
  const reduxUser = useSelector((state) => state.login.user);
  const dispatch = useDispatch();
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
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("fetch iniziata invio foto");
    console.log(user);
    try {
      let res = await fetch(API_URL_PROFILE_PHOTO, {
        method: "POST",
        body: fd,
        headers: {
          Authorization:
            "Bearer " + team.find((u) => u.userName === user.username).key,
        },
      });
      if (res.ok) {
        dispatch(profileThunk(reduxUser.username));
      }
      let foto = res.json();
      console.log(foto);
    } catch (error) {
      console.log(error);
    }
    setIsOpen(false);
  };
  const handleFile = (e) => {
    setFd((prev) => {
      prev.delete("profile");
      prev.append("profile", e.target.files[0]);
      return prev;
    });
  };
  console.log(user);
  return (
    <div>
      {loading ? (
        <Card className="w-100 positon-relative mb-2" id="jumbo-Card">
          <div className="rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 552 138"
              id="person-default"
              data-supported-dps="2048x512"
            >
              <path fill="none" d="M0 0h552v138H0z" />
              <path fill="#d9e5e7" d="M0 0h552v138H0z" />
              <path fill="#bfd3d6" d="M380 0h172v138H380z" />
              <path
                d="M333.22 0H0v138h333.22a207.93 207.93 0 000-138z"
                fill="#a0b4b7"
              />
            </svg>
          </div>
          <Card.Body className="d-flex justify-content-between">
            <Row>
              <Col>
                {!userLink ? (
                  <img
                    className="rounded-circle position-absolute imgJumboRoundend
   "
                    src={user.image}
                    alt="img-profile"
                  />
                ) : (
                  <img
                    className="rounded-circle position-absolute imgJumboRoundend
 "
                    src={userLink.image}
                    alt="img-profile"
                  />
                )}
                <div>
                  {!userLink ? (
                    <h3 className="text-start mb-0">
                      {user.name} {user.surname}
                    </h3>
                  ) : (
                    <h3 className="text-start mb-0">
                      {userLink.name} {userLink.surname}
                    </h3>
                  )}
                  <p className="text-start mb-1">Studente presso</p>
                  <p className="text-start text-secondary">{user.area} </p>
                 
                  <Button
                    className="text-start mx-1 py-0 rounded-pill "
                    variant="primary"
                  >
                    <b>Disponibile per</b>
                  </Button>
                </div>
                <p onClick={openModal} className="text-end fs-2"><i className="fas fa-camera hover"></i></p>
                  <Modal isOpen={modalIsOpen} contentLabel="Example Modal"
                    onRequestClose={closeModal}
                    style={customStyles}>
                    <Form onSubmit={handleSubmit}><input type="file" onChange={handleFile} />
                      <Button type="submit">invia foto</Button>
                      <Button type="button" variant="secondary" onClick={closeModal}>Close</Button>
                    </Form>
                  </Modal>
                <Button
                  className="text-start mx-1  py-1 rounded-pill"
                  variant="outline-primary"
                >
                  Aggiungi sezione al profilo
                </Button>

                <Button
                  className="text-start mx-1 py-0 rounded-pill"
                  variant="outline-secondary"
                >
                  <b>Altro</b>
                </Button>
                <div
                  id="backgroudJumboDiv"
                  className="w-100 mt-4 ps-2 rounded text-start"
                >
                  <p className="mb-0 fw-bold text-primary">
                    Disponibile a lavorare
                  </p>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ) : (
        <div className="d-flex justify-content-center my-4">
          <Spinner></Spinner>
        </div>
      )}
    </div>
  );
};

export default Jumbotron;
