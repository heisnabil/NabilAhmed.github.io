import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm <span className="purple">Shaikh Nabil Ahmed</span> from <span className="purple">Mumbai, India</span>.
            <br />
            I'm pursuing a B.E. in <span className="purple">Computer Science & Engineering (AI & ML)</span> at 
            Anjuman-I-Islam's Kalsekar Technical Campus (AIKTC) under Mumbai University, 
            with a <strong>CGPA of 9.2/10</strong>.
            <br />
            <br />
            I'm the <strong>Department Topper</strong> and was proudly honored with a <strong>Topper Award by Padma Shree Dr. Zahir Kazi</strong>.
          </p>

          <div className="about-subsection-title">
            🏆 Achievements
          </div>
          <ul className="achievements-list">
            <li><strong>Department Topper</strong> — Highest CGPA (9.2/10), B.E. CSE (AI/ML), AIKTC Mumbai</li>
            <li><strong>Winner</strong> — Slide Storm Hackathon</li>
            <li><strong>Runner-Up</strong> — Project Competition, AIKTC</li>
            <li><strong>Charter President</strong> — NeurOnyx, ACM Chapter, AIKTC</li>
            <li><strong>2nd Runner-Up (Zonal)</strong> — HackArena 2.0 | Delhi Grand Finale Qualifier</li>
            <li><strong>1st Runner-Up</strong> — SIH Internal Hackathon</li>
            <li><strong>1st Runner-Up</strong> — Techastra 2.0 Hackathon</li>
            <li><strong>2nd Runner-Up</strong> — Techastra 3.0 Hackathon</li>
            <li><strong>2nd Runner-Up</strong> — Creathon Hackathon</li>
          </ul>

          <div className="about-subsection-title">
            🎓 Certifications
          </div>
          <div>
            <div className="cert-card">
              <span className="cert-icon">📜</span>
              <div className="cert-info">
                <div className="cert-name">Artificial Intelligence: Concept and Technique</div>
                <div className="cert-issuer">NPTEL — IIS Bangalore</div>
              </div>
            </div>
            <div className="cert-card">
              <span className="cert-icon">📜</span>
              <div className="cert-info">
                <div className="cert-name">Optimization in Machine Learning</div>
                <div className="cert-issuer">NPTEL — IIIT Delhi</div>
              </div>
            </div>
            <div className="cert-card">
              <span className="cert-icon">📜</span>
              <div className="cert-info">
                <div className="cert-name">Introduction to C Programming</div>
                <div className="cert-issuer">NPTEL — IIT Kanpur</div>
              </div>
            </div>
          </div>

          <br />
          Apart from tech, I enjoy:
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling & Exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Content Writing & Public Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Mentoring Juniors & Leading Hackathons
            </li>
          </ul>
          <p style={{ color: "var(--text-muted)" }}>
            "Strive to build solutions that truly make a difference."
          </p>
          <footer className="blockquote-footer">Nabil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
