import React from "react";
import { FaGithub } from "react-icons/fa";

function Portfolio() {
  return (
    <div>
      <h1>Portfolio</h1>
      <section class="show">
        <article class="homework1 container">
          <img
            src="./assets/images/local_exchange_hub_homepage.png"
            alt="screenshot of local exchange hub webpage"
          />
          <div class="show-text">
            <a href="https://local-exchange-hub.herokuapp.com/" target="_blank">
              <h5>Local Exchange Hub</h5>
            </a>
            <a>
              <FaGithub />
            </a>
          </div>
        </article>
        <article class="container">
          <img
            src="./assets/images/RRG.png"
            alt="Random Recipe generator webpage"
          />
          <div class="show-text">
            <a
              href="https://bongomin256.github.io/Random-Recipe-Generator/"
              target="_blank"
            >
              <h5>Random Recipe Generator</h5>
            </a>
            <a href="https://github.com/bongomin256/Random-Recipe-Generator">
              <FaGithub />
            </a>
          </div>
        </article>
        <article class="container">
          <img
            src="./assets/images/weather.png"
            alt="weather dashboard webpage"
          />
          <div class="show-text">
            <a
              href=" https://bongomin256.github.io/Weather-Dashboard/"
              target="_blank"
            >
              <h5>Weather Dashboard</h5>
            </a>
            <a href="https://github.com/bongomin256/Weather-Dashboard">
              <FaGithub />
            </a>
          </div>
        </article>
        <article class="container">
          <img
            src="./assets/images/My_Portfolio.png"
            alt="screenshot of my Portfoilio webpage"
          />
          <div class="show-text">
            <a
              href="https://bongomin256.github.io/Godfreys-Portfolio/"
              target="_blank"
            >
              <h5>My Portfoilio</h5>
            </a>
            <a href="https://github.com/bongomin256/Godfreys-Portfolio">
              <FaGithub />
            </a>
          </div>
        </article>
        <article class="container ">
          <img
            src="./assets/images/workdayPlanner.png"
            alt="Work day scheduler webpage"
          />
          <div class="show-text">
            <a
              href="https://bongomin256.github.io/Work-Day-Planner/"
              target="_blank"
            >
              <h5>Work Day Scheduler</h5>
            </a>
            <a href="https://github.com/bongomin256/Work-Day-Planner">
              <FaGithub />
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Portfolio;
