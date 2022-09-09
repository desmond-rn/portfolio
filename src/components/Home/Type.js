import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "HPC-AI Researcher",
          "Data Scientist",
          "Web Developer",
          "Science Tutor",
          "Outreach Ambassador",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
