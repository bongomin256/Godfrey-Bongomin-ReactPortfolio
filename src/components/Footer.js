import React, { Component } from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";
import styled from "styled-components";
const FooterStyle = styled.section`
  font-size: 3rem;
`;

function Footer() {
  return (
    <div>
      <FooterStyle className="footer">
        <FaGithub />
        <FaLinkedin />
        <FaStackOverflow />
      </FooterStyle>
    </div>
  );
}

export default Footer;
