import React from "react";
const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "2%",
    backgroundColor: "#0a192f",
    color: "white",
  },
  unorderedList: {
    listStyle: "none",
    fontSize: "16px",
    padding: "10px 25px",
    display: "flex",
    justifyContent: "space-between",
  },
  lists: {
    listStyle: "none",
    fontSize: "16px",
    padding: "10px 25px",
  },
  anchor: {
    color: "white",
    textDecoration: "none",
  },
  ahover: {
    color: "red",
  },
  resume: {
    backgroundColor: "transparent",
    border: "1px solid red",
    borderRadius: "5px",
    padding: "10px",
    transition: "0.3s",
  },
  resumehover: {
    backgroundColor: "#C87BA6",
    color: "white",
    cursor: "pointer",
  },
};

function NavTabs() {
  return (
    <div>
      <header className="App-header" style={styles.header}>
        <h1 style={{ fontSize: "250%", cursor: "pointer" }}>
          Godfrey <span style={{ color: "red" }}>Bongomin</span>
        </h1>

        <nav>
          <ul style={styles.unorderedList}>
            <li className="nav-item" style={styles.lists}>
              <a
                href="#about-me"
                onClick={() => handlePageChange("About Me")}
                style={styles.anchor}
                className={
                  currentPage === "About Me" ? "nav-link active" : "nav-link"
                }
              >
                About Me
              </a>
            </li>
            <li className="nav-item" style={styles.lists}>
              <a href="#portfolio" style={styles.anchor}>
                Portfoilio
              </a>
            </li>
            <li className="nav-item" style={styles.lists}>
              <a
                href="#contact"
                onClick={() => handlePageChange("Contact")}
                className={
                  currentPage === "Contact" ? "nav-link active" : "nav-link"
                }
                style={styles.anchor}
              >
                Contact
              </a>
            </li>
            <li className="nav-item" style={styles.lists}>
              <a
                href="#resume"
                onClick={() => handlePageChange("Resume")}
                className={
                  currentPage === "Resume" ? "nav-link active" : "nav-link"
                }
                style={styles.anchor}
              >
                Resume
              </a>
            </li>
            {/* <!-- <li><a id="resume" href="https://drive.google.com/file/d/1Ma5AX5ldQhmVet3d2FS5ORqK6y7a4beX/view" target="_blank">Resume</a></li> --> */}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default NavTabs;
