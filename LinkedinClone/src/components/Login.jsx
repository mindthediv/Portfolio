import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {
  handleLogin,
  handlePassword,
  handleUser,
  profileThunk,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { team } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const reduxUser = useSelector((state) => state.login.user);
  console.log(reduxUser);

  const checkLogin = () => {
    const userCondition =
      reduxUser.username ===
      team.find((u) => u.userName === reduxUser.username)?.userName;

    if (userCondition) {
      const passCondition =
        reduxUser.password ===
        team.find((u) => u.userName === reduxUser.username).password;

      if (passCondition) {
        dispatch(profileThunk(reduxUser.username));
        navigate("/me");
      } else {
        alert("wrong password");
      }
    } else {
      alert("this username do not exist");
    }
  };

  return (
    <Col xs={4} className="loginBox offset-4">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(handleLogin());
          checkLogin();
        }}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => dispatch(handleUser(e.target.value))}
            type="text"
            placeholder="Enter username"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={(e) => {
              dispatch(handlePassword(e.target.value));
            }}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Col>
  );
};

export default Login;
