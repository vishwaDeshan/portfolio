import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import Map from "../Map/Map";

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="Contact-section">
      <div className="Contact-container">
        <div className="Contact-left">
          <form ref={ref} onSubmit={handleSubmit} className="Contact-form">
            <h1 className="Contact-title">Get in touch</h1>
            <input placeholder="Name" name="name" className="Contact-input" />
            <input placeholder="Email" name="email" className="Contact-input" />
            <textarea
              placeholder="Write your message"
              name="message"
              rows={10}
              className="Contact-textarea"
            />
            <button type="submit" className="Contact-button">
              Send
            </button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
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
