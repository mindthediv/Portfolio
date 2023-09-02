import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ModalMakePost from "./ModalMakePost";
import { useSelector } from "react-redux";

const MakePost = () => {
  const user = useSelector((state) => state.login.user.username);
  const userImg = useSelector((state) => state.profile.content.image);

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

  // Modal.setAppElement("#App");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="w-100 whiteBg p-3 border rounded mb-2">
      <div className="d-flex align-items-center w-100 mb-2">
        <img
          src={userImg}
          width={50}
          height={50}
          className="rounded-circle me-2"
        />
        <div
          onClick={openModal}
          className="p-2 rounded-pill border text-secondary w-100"
        >
          Avvia un post
        </div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalMakePost
            user={user}
            userImg={userImg}
            closeModal={closeModal}
          />
        </Modal>
      </div>
      <div className="makePostBtnsBox d-flex justify-content-between">
        <div className="makePostBtn">
          <i className="fas fa-image text-primary me-1"></i>Foto
        </div>
        <div className="makePostBtn">
          <i className="fab fa-youtube text-success me-1"></i>Video
        </div>
        <div className="makePostBtn">
          <i className="fas fa-calendar-alt text-warning me-1"></i>Evento
        </div>
        <div className="makePostBtn">
          <i className="far fa-newspaper text-danger me-1"></i>Scrivi un
          articolo
        </div>
      </div>
    </div>
  );
};

export default MakePost;
