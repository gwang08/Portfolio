import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Commercial Website"
              description="An e-commerce platform designed to provide users with a seamless online shopping experience. Built with JSP, it features real-time product updates, secure payment processing, and an intuitive user interface for easy navigation."
              ghLink="https://github.com/gwang08/ecommerce-website"
              demoLink="https://github.com/gwang08/ecommerce-website"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ticket Resell"
              description="A dynamic ticket reselling platform that allows users to buy and sell event tickets. Built with Next.js and Tailwind CSS, it includes features like user authentication, real-time listings, and a clean interface that enhances the user experience."
              ghLink="https://github.com/gwang08/TicketResell_Web"
              demoLink="https://github.com/gwang08/TicketResell_Web"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
