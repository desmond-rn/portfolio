import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGooglescholar } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              A BIT <span className="green"> ABOUT </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with computer hardware and software at a young age, but ... Want the rest of my <span className="green"> origin story</span> ? 👉 TODO Link to FIRST EVER BLOG POST
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="green"> C/C++</b>
              </i>,
              <i>
                <b className="green"> Python</b>
              </i>, and
              <i>
                <b className="green"> Javascript</b>
              </i>.
              <br />
              <br />
              My main interest is building distributed algorithms for &nbsp;
              <i>
                <b className="green">High Performance Computing </b> using {" "}
                <b className="green">
                Physical Priors
                </b> and {" "}
                <b className="green">
                Artificial Intelligence
                </b>, namely {" "}
                <b className="green">
                Graph Neural Networks.
                </b> 
              </i>
              <br />
              <br />
              I also have a passion for developing Deep Learning models for <b className="green">Natural Language Processing</b>, together with web applications with modern Javascript libraries like
              <i>
                <b className="green">
                  {" "}
                  React.js
                </b>
              </i>
              &nbsp; and
              <i>
                <b className="green"> Node.js</b>
              </i>.
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
              Feel free to <strong className="green">connect </strong>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGooglescholar />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/s.o.u.m.y.a_j.i.t/"
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
