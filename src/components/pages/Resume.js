import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function Resume() {
  return (
    <div>
      <section
        className="Resume"
        style={{
          padding: "30px 100px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Resume</h1>
        <div>
          Download my{" "}
          <a
            href="https://drive.google.com/file/d/1aJ8V1sNmRRQlqoV2LGr8DKZGSWGyLvjr/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            style={{
              backgroundImage:
                "linear-gradient(to left, #12c2e9, #c471ed, #f64f59)",
              color: "#fff",
              borderRadius: "4rem",
              padding: "6px 12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            className="anchor-resume"
          >
            resume <FaExternalLinkAlt />
          </a>
        </div>
        <div>
          <article className="front-end">
            <h3>Front-end Proficiencies</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Responsive</li>
              <li>React</li>
              <li>bootstrap</li>
              <li>bulma</li>
            </ul>
          </article>
          <article className="back-end">
            <h3>Back-end Proficiencies</h3>
            <ul>
              <li>APIs</li>
              <li>Nodejs</li>
              <li>Expressjs</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoose</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Resume;
