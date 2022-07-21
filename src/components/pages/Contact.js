import React, { useState } from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  width: 50%;

  padding: 4rem;

  .form-group {
    width: 50%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 1.8rem;
    padding: 1rem 2rem;
    // background-color: #00102b;
    // color: white;
    outline: none;
    border: none;
    border-radius: 8px;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
  }
  textarea {
    min-height: 250px;
    resize: verticle;
  }

  button[type="submit"] {
    background-color: grey;
    color: black;
    font-size: 1.5rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 2rem;
    cursor: pointer;
    border-radius: 8px;
    margin-top: 1rem;
  }
  button[type="submit"]:hover {
    background-color: red;
    color: white;
  }
`;
function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div>
      <section
        className="contact"
        style={{
          padding: "30px 100px",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Contact</h1>
        <p style={{ fontSize: "1.8rem", textAlign: "center" }}>Get in touch</p>
        <FormStyle>
          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              name="name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>

          <div className="form-group">
            <label>
              Email
              <input
                value={email}
                email="email"
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
          </div>

          <div className="form-group">
            <label>
              Message
              <textarea
                value={message}
                message="message"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </label>
          </div>

          <button type="submit">Send</button>
        </FormStyle>
      </section>
    </div>
  );
}

export default Contact;
