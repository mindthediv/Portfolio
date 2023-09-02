import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import { addSingleExp, delExpThunk, handleArea, handleCompany, handleEndDate, handleNewRole, handleStartDate, handlleDescription } from "../../redux/actions/form";
import { allExperiences } from "../../redux/actions/index.js"
import { Spinner } from "react-bootstrap/esm";
import CardHeader from "react-bootstrap/esm/CardHeader";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { postNewExpeThunk } from "../../redux/actions/form";
import { getSingleExp } from "../../redux/actions/form";
import { formExpReducer } from "../../redux/reducers/formExpReducer";
import { Link, useLocation } from "react-router-dom/dist";
import EsperienceCard from "./EsperienceCard";
import EsperienceCardDet from "./EsperienceCardDet";

const Esperienze = () => {
  
  
  
  
    
    
    const singlexp = useSelector(state=>state.experience.singleExp)
    console.log(singlexp)
  
  
  
  const location = useLocation()
  console.log(location)
  //Fine sezione modale
  
  const loadingEx = useSelector((state) => state.experience.loadingExperience);
  const loading = useSelector((state) => state.profile.loading);
  let id = useSelector((state) => state.profile.content._id);
  const user = useSelector((state) => state.login.user.username);
  const dispatch = useDispatch();
  const experience = useSelector((state) => state.experience.content);

  useEffect(() => { }, []);
  
  
  useEffect(() => {
    loading && dispatch(allExperiences(user, id));  
  }, [id,experience.length]);

  console.log(experience);
  return (
    <>
      {loadingEx ? (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ): location.pathname === "/experience" ? (experience.map(exp =><EsperienceCardDet exp={exp}/>))
      
      : (<EsperienceCard />) 
      }

    </>
  );
};

export default Esperienze;