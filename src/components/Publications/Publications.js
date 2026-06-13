import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { BsJournalBookmarkFill, BsLink45Deg } from "react-icons/bs";

function Publications() {
  const publications = [
    {
      title: "WiChain: AI-Driven Wi-Fi Spoofing Detection with Blockchain Trust Framework",
      status: "Under Review",
      statusClass: "under-review",
      journal: "IEEE",
      keywords: [
        "Adversarial ML",
        "Decentralized Trust",
        "Random Forest",
        "Blockchain",
      ],
      description:
        "A hybrid AI + Blockchain framework for real-time Wi-Fi spoofing detection using adversarial machine learning and decentralized trust validation on tamper-proof ledgers.",
      link: "#",
    },
    {
      title: "Pneumonia & COVID-19 Detection Using Deep Learning CNNs",
      status: "Published",
      statusClass: "published",
      journal: "IJCST Journal",
      keywords: [
        "MobileNetV2",
        "VGG16",
        "CNN Ensemble",
        "Chest X-Ray Binary Classification",
      ],
      description:
        "CNN ensemble model combining MobileNetV2 and VGG16 architectures for binary classification of pneumonia and COVID-19 from chest X-ray images, deployed via Flask REST API.",
      link: "#",
    },
  ];

  return (
    <Container fluid className="publications-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Research <strong className="purple">Publications</strong>
        </h1>
        <p className="section-subtitle">
          Contributing to the global research community in AI/ML & Blockchain
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {publications.map((pub, index) => (
            <Col md={10} lg={8} key={index} style={{ marginBottom: "30px" }}>
              <div className="publication-card">
                <span className={`pub-status ${pub.statusClass}`}>
                  <BsJournalBookmarkFill />
                  {pub.status}
                </span>
                <h3 className="pub-title">{pub.title}</h3>
                <p className="pub-journal">{pub.journal}</p>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.95em", lineHeight: "1.7" }}>
                  {pub.description}
                </p>
                <div className="pub-keywords">
                  {pub.keywords.map((kw, i) => (
                    <span key={i} className="pub-keyword">{kw}</span>
                  ))}
                </div>
                {pub.link && pub.link !== "#" && (
                  <Button variant="primary" href={pub.link} target="_blank">
                    <BsLink45Deg /> &nbsp;View Paper
                  </Button>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
