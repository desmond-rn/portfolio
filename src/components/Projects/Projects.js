import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import radiatif from "../../Assets/Projects/radiatif.png";
import engine from "../../Assets/Projects/engine.png";
import icefloes from "../../Assets/Projects/icefloes.png";
import phifem from "../../Assets/Projects/phifem.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="green">Work </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a select list of projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={engine}
              isBlog={false}
              title="AI4HPC"
              description="How would you design a jet engine without ever buiding eanything ? This project introduces a Graph Neural Network model to acclerate the Algebraic Multigrid (AMG) method for linear systems. The goal is to improve AMG at its crucial prolongation step. The focus is on large and sparse linear systems coming from high-fidelity fluid simulation of gas-turbine engines during operation. This work mainly uses PyTorch, Deep Graph Library, and MATLAB."
              ghLink="https://github.com/desmond-rn/accelerating-amg"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={icefloes}
              isBlog={false}
              title="IceFloes"
              description="The rapid shrinking of the Arctic ice cap these last decades is seen as one of the most striking manifestations of global warming. We investigated what happens when two or more ice floes collide, both in 1D and in 2D. We started by modelling an ice floe as a mass-spring-damper lattice, then we derived convergence guarantees with respect to its dynamics (percussion, fracture, etc.)."
              ghLink="https://github.com/desmond-rn/ice-floes"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={phifem}
              isBlog={false}
              title="φ-FEM"
              description="In recent years, numerical models using the Finite Elements Method (FEM) to simulate the soft tissue mechanisms of the human body have attracted a great interest. In the context of computer-assisted surgery, the simulation method should be quick, precise, and patient-specific. This work develops a new immersed boundary method named φ-FEM to address those issues."
              ghLink="https://github.com/desmond-rn/phifem"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={radiatif}
              isBlog={false}
              title="AI4Cancer"
              description="We solved a computerized tomography inverse problem: given the signal on the boundaries of an organ, we want to rebuild the density map of the organ, hence detecting abnormally high density zones (which are potential indicators of early-onset cancer). Our main tasks were: simulating the radiative transfer equation; using Convolutional Neural Network to solve the related inverse problem; using a V-Net to improve accuracy and recreate the complete density map."
              ghLink="https://github.com/desmond-rn/inverse-problem-vnet"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
