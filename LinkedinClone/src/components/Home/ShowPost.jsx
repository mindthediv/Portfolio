import { useDispatch, useSelector } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ModalModifyPost from "./ModalModifyPost";
import { Link, useParams } from "react-router-dom";
import { getExperiencesPeople } from "../../redux/actions";

const ShowPost = ({ post }) => {
  const user = useSelector((state) => state.login.user.username);
  const userImg = useSelector((state) => state.profile.content.image);
 const dispatch= useDispatch()
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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }
  const { id } = useParams();

  return (
    <div className="whiteBg rounded border  pb-0 w-100 d-flex flex-column mb-2">
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex w-100 justify-content-between align-items-center p-2">
          <div>
            <img
              src={post.user.image}
              onError={(ev) => {
                ev.target.src = "http://placekitten.com/800";
              }}
              className="rounded-circle me-2"
              width={40}
              height={40}
            />
            <Link 
              className="nav-link d-inline"
              to={"/profiles/" + post.user._id}
            >
              <small
                className="fw-bold d-inline "
                style={{ height: "fit-content" }}
              >
                {post.username}
              </small>
            </Link>
          </div>

          <small className="align-self-end ">
            {post.createdAt.slice(0, 10)}
          </small>
        </div>

        {post.username === user && (
          <div>
            <button
              onClick={openModal}
              className="btn btn-secondary rounded-circle"
            >
              <i className="far fa-edit"></i>
            </button>
            <Modal
              isOpen={modalIsOpen}
              onAfterOpen={afterOpenModal}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <ModalModifyPost
                user={user}
                userImg={userImg}
                post={post}
                closeModal={closeModal}
              />
            </Modal>
          </div>
        )}
      </div>
      <p className="lh-1 p-2">{post.text}</p>
      <img src={post.image} className="w-100 mb-1 d-block " />
      <div className="border-top d-flex justify-content-evenly">
        <div className="d-flex flex-column align-items-center justify-content-center mt-3 p-2 text-secondary">
          <i class="fas fa-thumbs-up fs-5"></i>
          <small>Consiglia</small>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-3 p-2 text-secondary">
          <i class="fas fa-comments fs-5"></i>
          <small>Commenta</small>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-3 p-2 text-secondary">
          <i class="fas fa-retweet fs-5"></i>
          <small>Diffondi</small>
        </div>
        <div className="d-flex flex-column align-items-center justify-content-center mt-3 p-2 text-secondary">
          <i class="fas fa-paper-plane fs-5"></i>
          <small>Invia</small>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
