import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been building impactful
              solutions ever since 🚀
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Python, JavaScript, C++, C, and SQL. </b>
              </i>
              <br />
              <br />
              My core expertise lies in &nbsp;
              <i>
                <b className="purple">Artificial Intelligence & Machine Learning</b>,
                {" "}including Deep Learning, Computer Vision, and&nbsp;
                <b className="purple">Blockchain</b>.
              </i>
              <br />
              <br />
              I build end-to-end products using
              <b className="purple"> TensorFlow, PyTorch, Scikit-learn </b>
              for AI and
              <i>
                <b className="purple">
                  {" "}
                  Next.js, React, Node.js, MongoDB & Firebase
                </b>
              </i>
              &nbsp; for full-stack development.
              <br />
              <br />
              I'm also a <b className="purple">published researcher</b> with papers in 
              <b className="purple"> IEEE</b> and <b className="purple">IJCST Journal</b>, 
              and the <b className="purple">Charter President</b> of NeurOnyx — the ACM Chapter at AIKTC.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/heisnabil"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
           
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shaikh-nabil-ahmed-3439a2285"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/heis._.nabil?igsh=MW45ZW5ucmhoYWZ4bQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
