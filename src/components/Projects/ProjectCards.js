import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <div className="project-img-wrapper">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        {props.status && (
          <div className={`project-status ${props.statusClass || ""}`}>
            ● {props.status}
          </div>
        )}
      </div>
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.techTags && (
          <div className="tech-tags">
            {props.techTags.map((tag, i) => (
              <span key={i} className="tech-tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="mt-auto pt-3">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
