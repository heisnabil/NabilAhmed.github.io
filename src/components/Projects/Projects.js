import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images
import wichain from "../../Assets/Projects/wichain.jpg";
import carbonnet from "../../Assets/Projects/carbonnet.png";
import railway from "../../Assets/Projects/railway.png";
import xray from "../../Assets/Projects/xray.png";
import medical from "../../Assets/Projects/medical.png";
import liveness from "../../Assets/Projects/liveness.png";
import stress from "../../Assets/Projects/stress.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          My <strong className="purple">Projects</strong>
        </h1>
        <p className="section-subtitle">
          Research-driven AI solutions built from scratch
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wichain}
              isBlog={false}
              title="WiChain: AI-Driven Wi-Fi Spoof Detection"
              description="Engineered AI-powered Wi-Fi spoofing detection using Random Forest (94% accuracy) trained on 2,000+ self-collected real-world packet captures from Mumbai networks. Built decentralized blockchain trust layer for tamper-proof anomaly logging — under IEEE review."
              ghLink="https://wi-chain.vercel.app/"
              status="Under IEEE Review"
              statusClass="in-review"
              techTags={["Python", "Random Forest", "Scikit-learn", "Blockchain", "Flask"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carbonnet}
              isBlog={false}
              title="Carbon-Net v2: Satellite Carbon Platform"
              description="Built satellite-driven carbon platform using 4-layer AI models: LSTM (forecasting), XGBoost (classification), Isolation Forest (anomaly), Autoencoder (compression). REST API + real-time dashboard with Node.js, Firebase, Next.js; carbon credits via Solidity smart contracts."
              ghLink="https://github.com/heisnabil"
              status="Deployed"
              statusClass="deployed"
              techTags={["LSTM", "XGBoost", "Node.js", "Firebase", "Next.js", "Solidity"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="Railway Crack Detection (Edge AI)"
              description="Deployed edge AI crack detection on Raspberry Pi using MobileNet CNN + OpenCV; real-time low-compute inference for railway track monitoring — commended by Thane Railway Section Engineer."
              ghLink="https://github.com/heisnabil/TrackTech"
              status="Deployed"
              statusClass="deployed"
              techTags={["TensorFlow", "MobileNet CNN", "OpenCV", "Raspberry Pi"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xray}
              isBlog={false}
              title="Pneumonia & COVID-19 Detection"
              description="Built CNN ensemble (MobileNetV2 + VGG16) for chest X-ray binary classification with Flask REST API deployment — published in IJCST Journal."
              ghLink="https://github.com/heisnabil/Neuradetect"
              status="Published"
              statusClass="published"
              techTags={["MobileNetV2", "VGG16", "PyTorch", "Flask"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Input-Based Medical Diagnosis System"
              description="ML system to predict diseases from symptoms using Python & SVM classifier. Recommends treatments based on AI-powered diagnosis with high accuracy across multiple conditions."
              ghLink="https://github.com/heisnabil/HealthCare-Project-Machine-Learning"
              techTags={["Python", "SVM", "Scikit-learn", "Flask"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={liveness}
              isBlog={false}
              title="Liveliness Detection for UIDAI"
              description="Face liveness detection system using eye blinking to differentiate real humans from spoof attempts. Built for real-world UIDAI authentication problem statements."
              ghLink="https://github.com/heisnabil/Liveliness-Detection-For-UIDAI-Problem-Statement"
              techTags={["OpenCV", "Deep Learning", "Python", "Computer Vision"]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stress}
              isBlog={false}
              title="Student Stress Level Prediction"
              description="AI/ML project predicting student stress from inputs like sleep, academics using DecisionTreeClassifier & Flask web deployment."
              ghLink="https://github.com/heisnabil/Student-Stress-Level-Prediction"
              techTags={["Python", "Decision Tree", "Flask", "ML"]}
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
