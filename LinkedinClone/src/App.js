import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import ExperienceDetails from "./components/Profile/EsperienceDetails";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import ProfileLink from "./components/Profile/ProfileLink";
Modal.setAppElement("#root");

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container fluid className="w-100">
          <Row className="sticky-top">
            <Col>
              <header>
                <NavBar />
              </header>
            </Col>
          </Row>
          <div className="p-3">
            <Routes>
              <Route path="/me" element={<Profile />}></Route>
              <Route path="/profiles/:id" element={<ProfileLink />}></Route>
              <Route path="/" element={<Login />}></Route>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/experience" element={<ExperienceDetails />} />
            </Routes>
          </div>

          <Row>
            <Col>
              <footer>
                <Footer />
              </footer>
            </Col>
          </Row>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
