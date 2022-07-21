import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import styled from "styled-components";
// import { Link } from "react-router-dom";

const FooterStyle = styled.section`
  font-size: 3rem;
  text-align: center;
  padding-top: 1rem;
  padding-bottom: 1rem;

  a {
    color: grey;
    margin-right: 1rem;
  }

  a:hover {
    color: white;
  }
`;

function Footer() {
  return (
    <div>
      <FooterStyle className="footer">
        <a
          href="https://github.com/bongomin256"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/godfrey-bongomin/"
          target="_blank"
          rel="noreferrer"
          className="linkedin"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://stackoverflow.com/users/17979121/bongomin256"
          target="_blank"
          rel="noreferrer"
          className="stack"
        >
          <FaStackOverflow />
        </a>
      </FooterStyle>
    </div>
  );
}

export default Footer;
