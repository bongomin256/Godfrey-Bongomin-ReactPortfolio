import React, { useState } from "react";
import localExchange from "../images/local_exchange_hub_homepage.png";
import MyPortfolio from "../images/My_Portfolio.png";
import RRG from "../images/RRG.png";
import weather from "../images/weather.png";
import workdayPlanner from "../images/workdayPlanner.png";
import codeQuiz from "../images/code-Quiz.png";
import { FaGithub } from "react-icons/fa";

const styles = {
  Portfolio: {
    padding: "30px 100px",
  },
  projects: {
    display: "flex",
  },
  container: {
    margin: "2%",
    flex: "0 1 46%",
    border: "3px solid #64ffda",
    position: "relative",
    cursor: "pointer",
    opacity: "0.4",
    transition: "0.3s",
  },
  img: {
    width: "100%",
  },
  projexText: {
    position: "absolute",
    color: "white",
    bottom: "8%",
    display: "flex",
    alignItems: "center",
    margin: "10px",
    textDecoration: "none",
  },
  h5: {
    fontSize: "30px",
    fontWeight: "20px",
    color: "#001028",
  },
  icons: {
    fontSize: "30px",
    marginLeft: "20px",
    color: "#001028",
  },
  anchor: {
    textDecoration: "none",
  },
};

function Portfolio() {
  const [hover, setHover] = useState(false);
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);

  // mouseOver events handlers

  const handleMouseOver = (e) => {
    setHover(true);
  };
  const handleMouseOver1 = (e) => {
    setHover1(true);
  };
  const handleMouseOver2 = (e) => {
    setHover2(true);
  };
  const handleMouseOver3 = (e) => {
    setHover3(true);
  };
  const handleMouseOver4 = (e) => {
    setHover4(true);
  };
  const handleMouseOver5 = (e) => {
    setHover5(true);
  };

  // mouseOut events handlers

  const handleMouseOut = (e) => {
    setHover(false);
  };
  const handleMouseOut1 = (e) => {
    setHover1(false);
  };
  const handleMouseOut2 = (e) => {
    setHover2(false);
  };
  const handleMouseOut3 = (e) => {
    setHover3(false);
  };
  const handleMouseOut4 = (e) => {
    setHover4(false);
  };
  const handleMouseOut5 = (e) => {
    setHover5(false);
  };

  return (
    <div>
      <section className="Portfolio" style={styles.Portfolio}>
        <h1
          className="portfolio-header"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          Portfolio
        </h1>
        <div className="projects" style={styles.projects}>
          <div
            className="left"
            style={{ width: "50%" }}
            // onMouseOver={handleMouseOver}
            // onMouseOut={handleMouseOut}
          >
            <article
              className="container"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            >
              <img
                src={localExchange}
                alt="screenshot of local exchange hub webpage"
                style={styles.img}
              />
              {hover && (
                <div className="project-text" style={styles.projexText}>
                  <a
                    href="https://local-exchange-hub.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5} className="proHeader">
                      Local Exchange Hub
                    </h5>
                  </a>
                  <a href="https://github.com/rkutsel/local-exchange-hub">
                    <FaGithub style={styles.icons} className="fa-icon" />
                  </a>
                </div>
              )}
            </article>
            <article
              className="container"
              onMouseOver={handleMouseOver1}
              onMouseOut={handleMouseOut1}
            >
              <img
                src={RRG}
                alt="Random Recipe generator webpage"
                style={styles.img}
              />
              {hover1 && (
                <div className="project-text" style={styles.projexText}>
                  <a
                    href="https://bongomin256.github.io/Random-Recipe-Generator/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5} className="proHeader">
                      Random Recipe Generator
                    </h5>
                  </a>
                  <a href="https://github.com/bongomin256/Random-Recipe-Generator">
                    <FaGithub style={styles.icons} className="fa-icon" />
                  </a>
                </div>
              )}
            </article>
            <article className="container">
              <img
                src={weather}
                alt="weather dashboard webpage"
                style={styles.img}
                onMouseOver={handleMouseOver2}
                onMouseOut={handleMouseOut2}
              />
              {hover2 && (
                <div className="project-text" style={styles.projexText}>
                  <a
                    href=" https://bongomin256.github.io/Weather-Dashboard/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5} className="proHeader">
                      Weather Dashboard
                    </h5>
                  </a>
                  <a href="https://github.com/bongomin256/Weather-Dashboard">
                    <FaGithub style={styles.icons} className="fa-icon" />
                  </a>
                </div>
              )}
            </article>
          </div>
          <div className="right" style={{ width: "50%" }}>
            <article
              className="container"
              onMouseOver={handleMouseOver3}
              onMouseOut={handleMouseOut3}
            >
              <img
                src={MyPortfolio}
                alt="screenshot of my Portfoilio webpage"
                style={styles.img}
              />

              {hover3 && (
                <div style={styles.projexText}>
                  <a
                    href="https://bongomin256.github.io/Godfreys-Portfolio/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5} className="proHeader1">
                      My Portfoilio
                    </h5>
                  </a>
                  <a href="https://github.com/bongomin256/Godfreys-Portfolio">
                    <FaGithub style={styles.icons} className="fa-icon" />
                  </a>
                </div>
              )}
            </article>
            <article
              className="container"
              onMouseOver={handleMouseOver4}
              onMouseOut={handleMouseOut4}
            >
              <img
                src={workdayPlanner}
                alt="Work day scheduler webpage"
                style={styles.img}
              />
              {hover4 && (
                <div className="project-text" style={styles.projexText}>
                  <a
                    href="https://bongomin256.github.io/Work-Day-Planner/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5} className="proHeader">
                      Work Day Scheduler
                    </h5>
                  </a>
                  <a href="https://github.com/bongomin256/Work-Day-Planner">
                    <FaGithub style={styles.icons} className="fa-icon" />
                  </a>
                </div>
              )}
            </article>
            <article
              className="container"
              onMouseOver={handleMouseOver5}
              onMouseOut={handleMouseOut5}
            >
              <img
                src={codeQuiz}
                alt="Work day scheduler webpage"
                style={styles.img}
              />
              {hover5 && (
                <div className="project-text" style={styles.projexText}>
                  <a
                    href="https://bongomin256.github.io/Code-Quiz-Challenge/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5} className="proHeader">
                      Code Quiz Challenge
                    </h5>
                  </a>
                  <a href="https://github.com/bongomin256/Code-Quiz-Challenge">
                    <FaGithub style={styles.icons} className="fa-icon" />
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
