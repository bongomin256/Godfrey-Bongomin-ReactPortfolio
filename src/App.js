// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Godfrey <span>Bongomin</span>
        </h1>

        <nav>
          <ul>
            <li>
              <a href="#about-me">About Me</a>
            </li>
            <li>
              <a href="#mywork">My Work</a>
            </li>
            <li>
              <a href="#contactme">Contact Me</a>
            </li>
            <li>
              <a
                id="resume"
                href="https://drive.google.com/file/d/1aJ8V1sNmRRQlqoV2LGr8DKZGSWGyLvjr/view?usp=sharing"
                target="_blank"
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

export default App;
