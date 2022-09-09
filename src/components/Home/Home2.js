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
                <b className="green"> C/C++</b>,
                <b className="green"> Python</b>, and
                <b className="green"> Javascript</b>.
              <br />
              <br />
              My main interest is building distributed algorithms for &nbsp;
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
              <br />
              <br />
              I also have a passion for developing Deep Learning models for <b className="green">Natural Language Processing</b>, together with web applications with modern Javascript libraries like
                <b className="green">
                  {" "}
                  React.js
                </b>
              &nbsp; and
                <b className="green"> Node.js</b>.
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
            <h1><span className="green">FIND</span> ME ON</h1>
            <p>
              Feel free to connect with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="https://scholar.google.com/citations?user=80GLOSUAAAAJ&hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <SiGooglescholar />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/desmond-rn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/rdesnzoyem"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/roussel-desmond-nzoyem/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/roussel_dn/"
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
