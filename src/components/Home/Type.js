import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Candidate for Master's in Cyber Security",
          "BS in Computer Information Systems",
          "Computer Enthusiast",
          "Dog Lover"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
