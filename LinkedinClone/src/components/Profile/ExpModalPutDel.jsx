import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { delExpThunk, handleArea, handleCompany, handleEndDate, handleNewRole, handleStartDate, handlleDescription, modifyExp, postNewExpeThunk } from "../../redux/actions/form";
import { Button } from "react-bootstrap";
import { useEffect } from "react";

const ExpModalPutDel =(props)=>{
    const dispatch = useDispatch()
    let id = useSelector((state) => state.profile.content._id);
  const user = useSelector((state) => state.login.user.username);
  const actual = []
  const experience = useSelector((state) => state.experience.content);
  const form = useSelector((state)=> state.form)
  console.log(props.expId)
    actual.push(experience.find((e)=> e._id === props.expId))
    
    console.log(actual)
  useEffect(()=>{
    dispatch(handleArea(actual[0].area))
    dispatch(handleNewRole(actual[0].role))
    dispatch(handleStartDate(actual[0].startDate))
    dispatch(handleEndDate(actual[0].endDate))
    dispatch(handleCompany(actual[0].company))
    dispatch(handlleDescription(actual[0].description))
  },[])
    return(   
         <Form onSubmit={(e) => {
        e.preventDefault()
          dispatch(modifyExp(form,id,props.expId,user))
          
      }}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Role</Form.Label>
          <Form.Control
            type="text"
            placeholder="Role"
            value={form.role}
            onChange={(e) => dispatch(handleNewRole(e.target.value))}
          />
          <Form.Label>Company</Form.Label>
          <Form.Control
            type="text"
            placeholder="Company Name"
            value={form.company}
            onChange={(e) => dispatch(handleCompany(e.target.value))}
          />
        </Form.Group>
        <Form.Label>Star Date {form.startDate}</Form.Label>
        <Form.Control type="date" onChange={(e) => dispatch(handleStartDate(e.target.value))} />
        <Form.Label>Star End {form.endDate}</Form.Label>
        <Form.Control type="date" onChange={(e) => dispatch(handleEndDate(e.target.value))} />
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} value={form.description} onChange={(e) => dispatch(handlleDescription(e.target.value))} />
        </Form.Group>
        <Form.Label>Luogo</Form.Label>
        <Form.Control
          type="text"
          placeholder="Area(ex Rome)"
          value={form.area}
          onChange={(e) => dispatch(handleArea(e.target.value))}
        />

       
          <Button variant="secondary" onClick={()=>dispatch(delExpThunk(id,props.expId,user))}>
            Delete
          </Button>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
          
        
      </Form>)
}

export default ExpModalPutDel