import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

// Images - you can add or update images for your projects here
import railway from "../../Assets/Projects/wichain.jpg";
import railway from "../../Assets/Projects/railway.png";
import medical from "../../Assets/Projects/medical.png";
import xray from "../../Assets/Projects/xray.png";
import liveness from "../../Assets/Projects/liveness.png";
import stress from "../../Assets/Projects/stress.png";
import blender from "../../Assets/Projects/blender.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Original Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of my self-made projects, built from scratch.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

            <Col md={4} className="project-card">
  <ProjectCard
    imgPath={wichain} // replace with your WiChain image import
    isBlog={false}
    title="WiChain: Blockchain-Powered Wi-Fi Spoof Detection System"
    description="WiChain is a hybrid ML + Blockchain system that detects fake Wi-Fi networks in real-time. It analyzes signal patterns, encryption types, and vendor info to classify spoofed hotspots, storing verified threats securely on a tamper-proof blockchain ledger."
    ghLink="https://wi-chain.vercel.app/" // add your actual GitHub repo link
    // add demo link if available
  />
</Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={railway}
              isBlog={false}
              title="AI-Based Railway Crack Detection System"
              description="Real-time railway track monitoring using Raspberry Pi, camera & AI. Detects cracks with computer vision & acoustic wave signals."
              ghLink="https://github.com/heisnabil/TrackTech" // add GitHub link if any
              // add demo link if any
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medical}
              isBlog={false}
              title="Input-Based Medical Diagnosis System"
              description="ML system to predict diseases from symptoms using Python, SVM classifier. Recommends treatments based on diagnosis."
              ghLink="https://github.com/heisnabil/HealthCare-Project-Machine-Learning" 
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xray}
              isBlog={false}
              title="Pneumonia & COVID-19 Detection from X-rays"
              description="CNN-based classification on chest X-rays using TensorFlow/Keras. Published research paper in IJCST Journal."
              ghLink="https://github.com/heisnabil/Neuradetect"
             
            />
          </Col>

          

          

          <Col md={4} className="project-card">
            <ProjectCard
             imgPath={stress}
              isBlog={false}
              title="Student Stress Level Prediction"
              description="AI/ML project predicting student stress from inputs like sleep, academics using DecisionTreeClassifier & Flask."
              ghLink="https://github.com/heisnabil/Student-Stress-Level-Prediction"
              
            />
          </Col>

          <Col md={4} className="project-card">
  <ProjectCard
     imgPath={liveness}
    isBlog={false}
    title="Liveliness Detection for UIDAI"
    description="A face liveness detection system that uses eye blinking to differentiate between real humans and spoof attempts. Aimed to solve real-world authentication problems in UIDAI verification."
    ghLink="https://github.com/heisnabil/Liveliness-Detection-For-UIDAI-Problem-Statement" // Add GitHub link if available
     // Add demo/demo video link if available
  />
</Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blender}
              isBlog={false}
              title="3D Blender Model for Rail Track"
              description="Animated 3D rail track model built without mouse, used as visual demo for railway crack detection project."
              ghLink="https://github.com/heisnabil/TrackTech"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
