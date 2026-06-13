import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Intern",
          "AI/ML Researcher",
          "Full-Stack Developer",
          "Published Author (IEEE & IJCST)",
          "Charter President — NeurOnyx, ACM",
          "Department Topper (9.2 CGPA)",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
