import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I’m <span className="purple">Shaikh Nabil Ahmed</span> from <span className="purple">Mumbai, India</span>.
            <br />
            I'm pursuing a B.E. in <span className="purple">Computer Science & Engineering (AI & ML)</span> at AIKTC under Mumbai University.
            <br />
            I'm a consistent <strong>University Topper</strong> and was proudly honored with a <strong>Topper Award by Padma Shree Dr. Zahir Kazi</strong>.
            <br />
            <br />
            👑 <strong>Achievements</strong>:
            <ul>
              <li>🏆 <strong>Runner-up and Best College Award</strong> – CSMU Hackathon 2024</li>
              <li>🥈 <strong>Runner-Up</strong> – AIKTC Project Competition 2024 </li>
              <li>🥇 <strong>2nd Runner-up</strong> – Creathon 2024 (National-Level Innovation Challenge) (₹10,000 Cash Prize)</li>
              <li>🥈 <strong>Runner-Up</strong> – SIH Internal Hackathon 2025</li>
              <li>🏅 <strong>Topper Award</strong> – Honored by Dr. Zahir Kazi (President, Anjuman-I-Islam)</li>
              <li>🎯 <strong>President</strong> – Neuronyx Club (AI & ML Club, AIKTC)</li>
              <li>💡 <strong>Recognized Innovator</strong> – For WiChain (Blockchain-based Wi-Fi Spoof Detection System)</li>
            </ul>
            <br />
            🧠 <strong>Key Projects</strong> I’ve worked on:
            <ul>
              <li>💻 WiChain — Blockchain-powered Wi-Fi Spoof Detection System</li>
              <li>🛤️ AI-based Railway Crack Detection</li>
              <li>💉 Medical Diagnosis from Symptoms using ML</li>
              <li>🔍 Face Liveliness Detection for UIDAI</li>
              <li>🦠 Pneumonia & COVID-19 Detection from X-rays</li>
            </ul>
            <br />
            Apart from tech, I enjoy:
          </p>
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
          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build solutions that truly make a difference."
          </p>
          <footer className="blockquote-footer">Nabil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
