import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "./Jumbotron";
import ForYou from "./ForYou";
import Attività from "./Attività";
import Analisi from "./Analisi";
import Lingue from "./Lingue";
import Interessi from "./Interessi";
import Esperienze from "./Esperienze";
import Risorse from "./Risorse";
import ListGroupExample from "./Rightside1";
import ProfilePost from "./ProfilePost";
import { useDispatch, useSelector } from "react-redux";
import { getExperiencesPeople, userLinkThunk } from "../../redux/actions";
import { useParams } from "react-router-dom";

const ProfileLink = () => {
  const user = useSelector((state) => state.login.user.username);
  const allPosts = useSelector((state) => state.home.allPosts);
  const userLink = useSelector((state) => state.profile.userLink);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(userLinkThunk(user, id));
    dispatch(getExperiencesPeople(user,id))
  }, []);

  return (
    <Container>
      <Row>
        <Col xs={12} lg={7} className=" offset-1">
          <Jumbotron userLink={userLink} />
          <Esperienze />
          {allPosts > 0 && <ProfilePost user={user} />}
          <Attività />
          <Analisi />
          <Risorse />
          <Lingue />
          <Interessi />
        </Col>
        <Col xs={12} lg={3} className="bg-light">
          <ListGroupExample />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileLink;
