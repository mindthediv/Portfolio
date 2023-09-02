import Form from "react-bootstrap/Form";
import { postsThunk, sendChange } from "../../redux/actions/HomePost";
import { useSelector, useDispatch } from "react-redux";
import { API_POSTS } from "../../redux/actions/HomePost";
import { team } from "../../redux/actions";
import { useEffect, useState } from "react";

const ModalModifyPost = ({ user, userImg, post, closeModal }) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState("");

  useEffect(() => {
    setTextValue(post.text);
    setFileState((current) => {
      current.delete("post");
      current.append("post", fileState);
      return current;
    });
    dispatch(sendChange(textValue));
  }, []);

  const putAPost = async (user) => {
    try {
      const response = await fetch(API_POSTS + `${post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
        body: JSON.stringify({ text: textValue }),
      });
      if (response.ok) {
        putAFilePost(user);
      }
      return response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const deletePost = async (user) => {
    try {
      const response = await fetch(API_POSTS + `${post._id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        dispatch(postsThunk(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [fileState, setFileState] = useState(new FormData());

  const putAFilePost = async (user) => {
    try {
      const response = await fetch(API_POSTS + `${post._id}`, {
        method: "POST",
        body: fileState,
        headers: {
          Authorization: "Bearer " + team.find((u) => u.userName === user).key,
        },
      });
      if (response.ok) {
        dispatch(postsThunk(user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (ev) => {
    setFileState((current) => {
      current.delete("post");
      current.append("post", ev.target.files[0]);
      return current;
    });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    putAPost(user);

    closeModal();
  };

  return (
    <div className="whiteBg rounded modalMakePost ">
      <div className="p-2 d-flex align-items-center">
        <img
          src={userImg}
          width={60}
          height={60}
          className="rounded-circle me-"
        />
        <h2>{user}</h2>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          onChange={(e) => {
            dispatch(sendChange(e.target.value));
            setTextValue(e.target.value);
          }}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Control value={textValue} as="textarea" rows={3} />
        </Form.Group>
        <input
          className="btn btn-primary mb-3"
          type="file"
          onChange={handleFile}
        />

        <div className="d-flex">
          <button className="rounded-circle">
            <i className="fas fa-image text-transparent"></i>
          </button>
          <button className="rounded-circle">
            <i className="fab fa-youtube text-success me-1"></i>
          </button>
          <button className="rounded-circle">
            <i className="fas fa-calendar-alt text-warning me-1"></i>
          </button>
          <button className="rounded-circle">
            <i className="far fa-newspaper text-danger me-1"></i>
          </button>
        </div>
        <div className="d-flex justify-content-end">
          <button type="submit" className="btn btn-secondary me-2">
            Modifica
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              deletePost(user);
              closeModal();
            }}
            className="btn btn-danger"
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      </Form>
    </div>
  );
};

export default ModalModifyPost;
