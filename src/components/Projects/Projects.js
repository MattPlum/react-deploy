import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import lead_game from "../../Assets/Projects/lead_game_gif.gif";
import old_website from "../../Assets/Projects/old_website.gif";
import caesar from "../../Assets/Projects/caesar.png";
import aes_rsa from "../../Assets/Projects/aes_rsa.png";
import sqlinjection from "../../Assets/Projects/sqlinjection.png";
import gdocs from "../../Assets/Projects/gdocs.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={old_website}
              isBlog={false}
              title="Old Website"
              description="The first website I made for fun, this helped me learn more about front end development"
              ghLink="https://github.com/MattPlum/old_website"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={caesar}
              isBlog={false}
              title="Caesar Encryption"
              description="A CBC substitution encryption algorithm that accepts a stream of ASCII characters and encrypts this input.  "
              ghLink="https://github.com/MattPlum/Encryption_CeasarCipher"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={aes_rsa}
              isBlog={false}
              title="AES and RSA Python Encryption"
              description="Two Encryption programs in Python using AES and RSA encryption"
              ghLink="https://github.com/MattPlum/Encryption_Exp2"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={sqlinjection}
              isBlog={false}
              title="SQL Injection Attack"
              description="Simple website using mySQL database to authenticate login, but is vulnerable to SQL injection attacks"
              ghLink="https://github.com/MattPlum/SQL_Injection_Exp1"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={gdocs}
              isBlog={false}
              title="Google Docs Clone"
              description="Project to immitate Google Docs allowing for multiple users to write in the same document and have it persist across sessions. Dployed the application to Google Cloud using Docker containers"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={lead_game}
              isBlog={false}
              title="Small Java Game"
              description="A short 2D platformer video game written in Java about the style of leadership I take when I am in a team-oriented work enviorment."
              ghLink="https://github.com/MattPlum/gamestest"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
