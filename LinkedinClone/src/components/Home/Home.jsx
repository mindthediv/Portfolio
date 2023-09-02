import { useDispatch, useSelector } from "react-redux";
import { allProfilesThunk, profileThunk } from "../../redux/actions";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import MakePost from "./MakePost";
import ShowPost from "./ShowPost";
import { useEffect } from "react";
import { postsThunk } from "../../redux/actions/HomePost";
import { Spinner } from "react-bootstrap";
import MiniProfile from "./MiniProfile";
import ShortNews from "./ShortNews";
import FooterHome from "./FooterHome";
import SottoJumbotron from "./SottoJumbotron";

const Home = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.home.allPosts);
  const user = useSelector((state) => state.login.user.username);

  useEffect(() => {
    dispatch(postsThunk(user));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} md={4} lg={3}>
            <MiniProfile />
            <SottoJumbotron />
          </Col>
          <Col xs={12} md={8} lg={6}>
            <MakePost />
            <hr />

            {allPosts[0] ? (
              allPosts[0].map((el, i) => (
                <ShowPost key={el._id + i} post={el} />
              ))
            ) : (
              <div className="d-flex justify-content-center my-4">
                <Spinner></Spinner>
              </div>
            )}
          </Col>
          <Col className="d-none d-lg-block" lg={3}>
            <ShortNews />
            <img
              src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png"
              className="w-100 my-2"
              alt=""
            />
            <FooterHome />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
