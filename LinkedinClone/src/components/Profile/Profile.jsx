import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Jumbotron from "./Jumbotron";
import ForYou from "./ForYou";
import Attività from "./Attività";
import Analisi from "./Analisi";
import Lingue from "./Lingue";
import Interessi from "./Interessi";
import Esperienze from "./Esperienze";
import Risorse from "./Risorse";
import Rightside1 from "./Rightside1";
import EsperienceCard from "./EsperienceCard";
import ProfilePost from "./ProfilePost";
import { useSelector } from "react-redux";
import Collegamenti from "./Collegamenti";

const Profile = () => {
  const user = useSelector((state) => state.login.user.username);
  const allPosts = useSelector((state) => state.home.allPosts);
  return (
    <Container>
      <Row>
        <Col xs={12} lg={8}>
          <Jumbotron />
          <ForYou />
          <Analisi />
          <Risorse />
          <Attività />
          {allPosts[0] && <ProfilePost user={user} />}
          <Esperienze />
          <Lingue />
          <Interessi />
        </Col>
        <Col xs={12} lg={4}>
          <Rightside1 />
          <Collegamenti />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
