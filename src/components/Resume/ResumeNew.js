import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import resumeImg from "../../Assets/Shaikh_Nabil_Ahmed_Wasim_Ahmed_page-0001.jpg";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeImg}
            target="_blank"
            download="Shaikh_Nabil_Ahmed_Resume"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <img
            src={resumeImg}
            alt="Shaikh Nabil Ahmed Resume"
            style={{
              maxWidth: "800px",
              width: "100%",
              borderRadius: "12px",
              border: "1px solid rgba(168, 85, 247, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          />
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={resumeImg}
            target="_blank"
            download="Shaikh_Nabil_Ahmed_Resume"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
