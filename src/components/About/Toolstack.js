import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVercel,
  SiGit,
  SiGithub, // Importing the GitHub icon
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" style={{ cursor: "pointer" }}>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ cursor: "pointer" }}>
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ cursor: "pointer" }}>
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ cursor: "pointer" }}>
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" style={{ cursor: "pointer" }}>
        <SiGithub /> {/* Adding the GitHub icon */}
      </Col>
    </Row>
  );
}

export default Toolstack;
