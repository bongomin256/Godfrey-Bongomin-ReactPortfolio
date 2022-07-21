import React from "react";
import myPhoto from "../images/FullSizeRender.jpeg";

const styles = {
  myphoto: {
    height: "200px",
    width: "200px",
    border: "4px solid red",
    borderRadius: "100%",
  },
  paragraph: {
    letterSpacing: "1px",
    lineHeight: "28px",
    fontSize: "17px",
    marginBottom: "25px",
    marginLeft: "20px",
    marginRight: "20px",
  },
};

function About() {
  return (
    <div>
      <section
        className="about"
        style={{
          //   display: "flex",
          padding: "30px 100px",
          justifyContent: "space-between",
        }}
      >
        <h1
          className="about-header"
          style={{ fontSize: "2.5rem", fontWeight: "bold" }}
        >
          About Me
        </h1>
        <article
          className="main-about"
          style={
            {
              // display: "flex",
            }
          }
        >
          <img
            className="my-photo"
            style={styles.myphoto}
            src={myPhoto}
            alt="Photo of me"
          />
          <div>
            <p style={styles.paragraph}>I am GODFREY BONGOMIN</p>
            <p style={styles.paragraph}>
              I have 8 years of experience working in production, logistics,
              customer service, and management in a multi-cultural setting.
              Having already earned a BBA from a globally accredited university,
              I am currently attending a full-stack development coding bootcamp
              at University of Washington with a goal of becoming a full-stack
              web developer. I have experience in HTML, CSS, Javascript and
              MySQL. Framework: Nodejs, Expressjs, ReactJs, GraphQL, mongoDB,
              bootstrap, bulma, APIs.
            </p>
            <p style={styles.paragraph}>
              Feel free to explore and contact me with any opportunities or
              inquiries you may have.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default About;
