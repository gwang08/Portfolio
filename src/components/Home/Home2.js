import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Import FaFacebookF from react-icons/fa
// Importing tech stack icons
import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiMicrosoftsqlserver,
} from "react-icons/si";

const Home2 = () => {
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
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello everyone! My name is Gwang, born in 2004, and I am a React Front-End Developer. I am passionate about building interactive and creative web applications, always looking for new ways to enhance my programming skills. I love working with React and modern web technologies, and I strive to create excellent user experiences. Nice to meet you all!
            </p>
            <Col md={12} className="home-about-tech-stack">
              <p>Technologies I've been working with:</p>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "20px" }}>
                <div style={{ ...iconStyle, color: "#61DAFB" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiReact size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#000" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiNextdotjs size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#F7DF1E" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiJavascript size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#3178C6" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiTypescript size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#E34F26" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiHtml5 size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#1572B6" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiCss3 size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#7952B3" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiBootstrap size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#38B2AC" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiTailwindcss size={50} />
                </div>
                <div style={{ ...iconStyle, color: "#CC2927" }} onMouseEnter={e => Object.assign(e.currentTarget.style, hoverStyle)} onMouseLeave={e => Object.assign(e.currentTarget.style, { transform: "scale(1)" })}>
                  <SiMicrosoftsqlserver size={50} />
                </div>
              </div>
            </Col>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        {/* Social Links Section */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/gwang08"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.facebook.com/minhwan0209/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaFacebookF />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gwangprogrammer/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
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
