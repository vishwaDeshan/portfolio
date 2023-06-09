import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Map from "../Map/Map";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    // Validate name
    if (!name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Validate email
    if (!email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email address";
      isValid = false;
    }

    // Validate message
    if (!message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm(
          "service_f0diwwe",
          "template_m8jg99m",
          ref.current,
          "mb9IGN-9fpdF608NA"
        )
        .then(
          (result) => {
            console.log(result.text);
            setSuccess(true);
          },
          (error) => {
            alert("Error sending message. Please try again.");
            setSuccess(false);
          }
        );
    }
  };

  return (
    <div className="Contact-section">
      <div className="Contact-container">
        <div className="Contact-left">
          <form ref={ref} onSubmit={handleSubmit} className="Contact-form">
            <h1 className="Contact-title">Get in touch</h1>
            <input
              placeholder="Name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`Contact-input ${
                errors.name && "Contact-input-error"
              }`}
            />
            {errors.name && (
              <span className="Contact-error-message">{errors.name}</span>
            )}

            <input
              placeholder="Email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`Contact-input ${
                errors.email && "Contact-input-error"
              }`}
            />
            {errors.email && (
              <span className="Contact-error-message">{errors.email}</span>
            )}

            <textarea
              placeholder="Write your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={10}
              className={`Contact-textarea ${
                errors.message && "Contact-textarea-error"
              }`}
            />
            {errors.message && (
              <span className="Contact-error-message">{errors.message}</span>
            )}
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
