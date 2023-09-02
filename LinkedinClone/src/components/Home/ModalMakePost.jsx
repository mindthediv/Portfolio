import Form from "react-bootstrap/Form";
import { sendChange } from "../../redux/actions/HomePost";
import { useSelector, useDispatch } from "react-redux";
import { API_POSTS } from "../../redux/actions/HomePost";
import { team } from "../../redux/actions";
import React, { useEffect, useRef, useState } from "react";
import { postsThunk } from "../../redux/actions/HomePost";

const ModalMakePost = ({ user, userImg, post, closeModal }) => {
  const textPost = useSelector((state) => state.home.text);
  const dispatch = useDispatch();
  console.log(post);

  const postAPost = async (user) => {
    try {
      const response = await fetch(API_POSTS, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",

          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
        body: JSON.stringify({ text: textPost }),
      });
      if (response.ok) {
        let savedPost = await response.json();
        postAFilePost(user, savedPost._id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [fileState, setFileState] = useState(new FormData());

  const postAFilePost = async (user, id) => {
    try {
      const response = await fetch(API_POSTS + `${id}`, {
        method: "POST",
        body: fileState,
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        dispatch(postsThunk(user));
        return response.json();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (ev) => {
    ev.preventDefault();
    setFileState((current) => {
      current.delete("post");
      current.append("post", ev.target.files[0]);
      console.log(current.get("post"));
      return current;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    postAPost(user);

    closeModal();
  };

  const fileSelect = React.useRef(null);

  return (
    <div className="whiteBg rounded modalMakePost ">
      <div className="p-2 d-flex align-items-center">
        <img
          src={userImg}
          width={60}
          height={60}
          className="rounded-circle me-1"
        />
        <h2>{user}</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          onChange={(e) => {
            dispatch(sendChange(e.target.value));
            console.log(textPost);
          }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <div>
          {fileState.get("post") && (
            <span className="p-2 mb-1">
              <span className="p-1 text-bg-primary rounded">
                Immagine allegata:
              </span>
              <span>{fileState.get("post").name}</span>
            </span>
          )}
        </div>
        <input
          className="btn btn-primary mb-3 d-none"
          type="file"
          onChange={handleFile}
          id="fileSelect"
          name="fileSelect"
          ref={fileSelect}
        />

        <div className="d-flex">
          <label for="fileSelect">
            <button
              className="btn rounded-circle"
              onClick={(ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                fileSelect.current.click();
              }}
            >
              <i className="fas fa-image text-transparent fs-1"></i>
            </button>
          </label>
          <button className="btn rounded-circle">
            <i className="fab fa-youtube text-success me-1 fs-1"></i>
          </button>
          <button className="btn rounded-circle">
            <i className="fas fa-calendar-alt text-warning me-1 fs-1"></i>
          </button>
          <button className="btn rounded-circle">
            <i className="far fa-newspaper text-danger me-1 fs-1"></i>
          </button>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-secondary">
            Pubblica
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ModalMakePost;
