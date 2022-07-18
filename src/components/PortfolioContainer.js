import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About Me");

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "About Me") {
      return <About />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}

      {/* OR */}

      {/* {currentPage === "Home" && <Home />}
      {currentPage === "About" && <About />}
      {currentPage === "Blog" && <Blog />}
      {currentPage === "Contact" && <Contact />} */}
    </div>
  );
}
