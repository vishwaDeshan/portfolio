import React, { useRef, useState } from "react";
import "./Contact.css";
import Map from "../Map/Map";

const Contact = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [success, setSuccess] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform custom validations
    let isValid = true;
    const errors = {};

    // Validate name
    if (nameRef.current.value.trim() === "") {
      errors.name = "Please enter your name";
      isValid = false;
    }

    // Validate email
    const email = emailRef.current.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "" || !emailRegex.test(email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    // Validate message
    if (messageRef.current.value.trim() === "") {
      errors.message = "Please enter your message";
      isValid = false;
    }

    setValidationErrors(errors);

    if (isValid) {
      // Handle form submission
      console.log("Form submitted");
      setSuccess(true);
    }
  };

  return (
    <div className="Contact-section">
      <div className="Contact-container">
        <div className="Contact-left">
          <form onSubmit={handleSubmit} className="Contact-form">
            <h1 className="Contact-title">Get in touch</h1>
            <input
              placeholder="Name"
              ref={nameRef}
              className={validationErrors.name ? "Contact-input invalid" : "Contact-input"}
            />
            {validationErrors.name && <p className="Contact-error">{validationErrors.name}</p>}
            <input
              placeholder="Email"
              ref={emailRef}
              className={validationErrors.email ? "Contact-input invalid" : "Contact-input"}
            />
            {validationErrors.email && <p className="Contact-error">{validationErrors.email}</p>}
            <textarea
              placeholder="Write your message"
              ref={messageRef}
              rows={10}
              className={validationErrors.message ? "Contact-textarea invalid" : "Contact-textarea"}
            />
            {validationErrors.message && <p className="Contact-error">{validationErrors.message}</p>}
            <button type="submit" className="Contact-button">
              Send
            </button>
            {success && (
              <p className="Contact-success-message">
                Your message has been sent. We'll get back to you soon :)
              </p>
            )}
          </form>
        </div>
        <div className="Contact-right">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Contact;
