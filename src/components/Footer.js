import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa"; // Import Facebook icon

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  const iconStyle = {
    margin: "10px",
    transition: "transform 0.3s",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const hoverStyle = {
    transform: "scale(1.2)",
  };

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Gwang</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Gwang</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons" style={{ display: "flex", justifyContent: "center", padding: 0 }}>
            <li className="social-icons">
              <a
                href="https://github.com/gwang08"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}
              >
                <AiFillGithub size={30} style={iconStyle} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/gwangprogrammer/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}
              >
                <FaLinkedinIn size={30} style={iconStyle} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.facebook.com/minhwan0209/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
                onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)}
                onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}
              >
                <FaFacebookF size={30} style={iconStyle} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
