import React, { useState } from "react";
import localExchange from "../images/local_exchange_hub_homepage.png";
import MyPortfolio from "../images/My_Portfolio.png";
import RRG from "../images/RRG.png";
import weather from "../images/weather.png";
import workdayPlanner from "../images/workdayPlanner.png";
import { FaGithub } from "react-icons/fa";

const styles = {
  Portfolio: {
    padding: "30px 100px",
  },
  projects: {
    display: "flex",
    // flexWrap: "wrap",
    // flexDirection: "row",
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
  },
  icons: {
    fontSize: "30px",
    marginLeft: "20px",
  },
  anchor: {
    textDecoration: "none",
  },
};

function Portfolio() {
  const [hover, setHover] = useState(false);

  const handleMouseOver = (e) => {
    console.log(e.target);
    setHover(true);
  };
  const handleMouseOut = () => {
    setHover(false);
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
          <div className="left" style={{ width: "50%" }}>
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
                    <h5 style={styles.h5}>Local Exchange Hub</h5>
                  </a>
                  <a href="https://github.com/rkutsel/local-exchange-hub">
                    <FaGithub style={styles.icons} />
                  </a>
                </div>
              )}
            </article>
            <article className="container">
              <img
                src={RRG}
                alt="Random Recipe generator webpage"
                style={styles.img}
              />
              {hover && (
                <div className="project-text" style={styles.projexText}>
                  <a
                    href="https://bongomin256.github.io/Random-Recipe-Generator/"
                    target="_blank"
                    rel="noreferrer"
                    style={styles.anchor}
                  >
                    <h5 style={styles.h5}>Random Recipe Generator</h5>
                  </a>
                  <a href="https://github.com/bongomin256/Random-Recipe-Generator">
                    <FaGithub style={styles.icons} />
                  </a>
                </div>
              )}
            </article>
            <article className="container">
              <img
                src={weather}
                alt="weather dashboard webpage"
                style={styles.img}
              />
              <div className="project-text" style={styles.projexText}>
                <a
                  href=" https://bongomin256.github.io/Weather-Dashboard/"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.anchor}
                >
                  <h5 style={styles.h5}>Weather Dashboard</h5>
                </a>
                <a href="https://github.com/bongomin256/Weather-Dashboard">
                  <FaGithub style={styles.icons} />
                </a>
              </div>
            </article>
          </div>
          <div className="right" style={{ width: "50%" }}>
            <article className="container">
              <img
                src={MyPortfolio}
                alt="screenshot of my Portfoilio webpage"
                style={styles.img}
              />
              <div className="project-text" style={styles.projexText}>
                <a
                  href="https://bongomin256.github.io/Godfreys-Portfolio/"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.anchor}
                >
                  <h5 style={styles.h5}>My Portfoilio</h5>
                </a>
                <a href="https://github.com/bongomin256/Godfreys-Portfolio">
                  <FaGithub style={styles.icons} />
                </a>
              </div>
            </article>
            <article className="container">
              <img
                src={workdayPlanner}
                alt="Work day scheduler webpage"
                style={styles.img}
              />
              <div className="project-text" style={styles.projexText}>
                <a
                  href="https://bongomin256.github.io/Work-Day-Planner/"
                  target="_blank"
                  rel="noreferrer"
                  style={styles.anchor}
                >
                  <h5 style={styles.h5}>Work Day Scheduler</h5>
                </a>
                <a href="https://github.com/bongomin256/Work-Day-Planner">
                  <FaGithub style={styles.icons} />
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
