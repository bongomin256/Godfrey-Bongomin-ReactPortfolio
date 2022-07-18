import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FaGithub } from "@fortawesome/free-solid-svg-icons";

library.add(fab, FaGithub);

function App() {
  return (
    <div className="App">
      <PortfolioContainer />
    </div>
  );
}

export default App;
