import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";

function Experience() {
  const experiences = [
    {
      role: "Machine Learning Intern",
      company: "Future Intern",
      date: "Jul – Aug 2025",
      location: "Remote",
      bullets: [
        <>Boosted ML model accuracy by <strong>25–40%</strong> via feature engineering, hyperparameter tuning, and optimized pipelines using <strong>TensorFlow & Scikit-learn</strong>.</>,
        <>Evaluated models with ROC-AUC, F1-score, SHAP explainability, and k-fold cross-validation; generated production-ready deployment insights across multiple datasets.</>,
      ],
      tags: ["Python", "TensorFlow", "Scikit-learn", "SHAP", "Feature Engineering"],
    },
    {
      role: "SEO & Frontend Intern",
      company: "Zelosify",
      date: "Jan – Feb 2026",
      location: "Remote",
      bullets: [
        <>Shipped production-grade UI components in <strong>Next.js</strong>; improved Lighthouse score via Core Web Vitals, code-splitting, and lazy loading optimization.</>,
        <>Executed On-Page, Off-Page, and Technical SEO; boosted organic visibility via structured data, schema markup, and metadata optimization.</>,
      ],
      tags: ["Next.js", "React", "SEO", "Core Web Vitals", "Schema Markup"],
    },
    {
      role: "C++ Developer Intern",
      company: "CodSoft",
      date: "Aug – Sep 2024",
      location: "Remote",
      bullets: [
        <>Built modular C++ utility libraries achieving <strong>34% runtime improvement</strong> via algorithm optimization, memory profiling, and STL best practices.</>,
      ],
      tags: ["C++", "Algorithm Optimization", "STL", "Memory Profiling"],
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ textAlign: "center" }}>
          Professional <strong className="purple">Experience</strong>
        </h1>
        <p className="section-subtitle">
          Building real-world impact through internships and industry exposure
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card-wrapper"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="experience-card">
                <div className="role">{exp.role}</div>
                <div className="company">{exp.company}</div>
                <div className="date-location">
                  <span className="date">📅 {exp.date}</span>
                  <span className="location">📍 {exp.location}</span>
                </div>
                <ul className="description">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <div className="tech-tags">
                  {exp.tags.map((tag, i) => (
                    <span key={i} className="tech-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;
