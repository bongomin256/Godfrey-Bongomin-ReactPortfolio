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
  // const [errorMessage, setErrorMessage] = useState("");

  // const handleInputChange = (e) => {
  //   // Getting the value and name of the input which triggered the change
  //   // const { target } = e;
  //   // const inputType = target.name;

  //   const inputValue = e.target.value;
  //   console.log(e);

  //   setEmail(inputValue);
  //   setMessage(inputValue);
  //   setName(inputValue);

  //   // Based on the input type, we set the state of either email, username, and password

  //   // if (inputType === "email") {
  //   //   setEmail(inputValue);
  //   // } else if (inputType === "name ") {
  //   //   setName(inputValue);
  //   // } else {
  //   //   setMessage(inputValue);
  //   // }
  // };

  // const handleFormSubmit = (e) => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   e.preventDefault();

  //   // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
  //   // if (!name || !email || !message) {
  //   //   setErrorMessage("all fields required");
  //   //   // We want to exit out of this code block if something is wrong so that the user can correct it
  //   //   return;
  //   //   // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
  //   // }

  //   // If successful, we want to clear out the input after registration.
  //   setName("");
  //   // TODO: Set the password back to an empty string after the user clicks submit
  //   setMessage("");
  //   setEmail("");
  // };

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

          <button type="submit" onClick={(e) => e.preventDefault()}>
            Send
          </button>
        </FormStyle>
      </section>
    </div>
  );
}

export default Contact;
