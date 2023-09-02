import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {
  handleArea,
  handleCompany,
  handleEndDate,
  handleNewRole,
  handleStartDate,
  handlleDescription,
  postNewExpeThunk,
} from "../../redux/actions/form";
import { useDispatch, useSelector } from "react-redux";

const ExpModalPost = () => {
  const dispatch = useDispatch();
  let id = useSelector((state) => state.profile.content._id);
  const user = useSelector((state) => state.login.user.username);
  const newExp = useSelector((state) => state.form);
  return (
    <Form
      onSubmit={(e) => {
          e.preventDefault();
        console.log("submit");
        console.log(newExp)
        dispatch(postNewExpeThunk(newExp, id, user));
        
      }}>
      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Role"
          onChange={(e) => dispatch(handleNewRole(e.target.value))}
        />
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Company Name"
          onChange={(e) => dispatch(handleCompany(e.target.value))}
        />

        <Form.Label>Star Date</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => dispatch(handleStartDate(e.target.value))}
        />
        <Form.Label>Star End</Form.Label>
        <Form.Control
          type="date"
          onChange={(e) => dispatch(handleEndDate(e.target.value))}
        />

        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          onChange={(e) => dispatch(handlleDescription(e.target.value))}
        />

        <Form.Label>Luogo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Area(ex Rome)"
          onChange={(e) => dispatch(handleArea(e.target.value))}
        />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default ExpModalPost;
