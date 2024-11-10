import React from "react";
import "./contact.css";

function Contact() {
  function handleFormSubmit(e) {
    const form = e.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
        } else {
          alert("There was a problem sending your message. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was a problem sending your message. Please try again.");
      });
  }
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <section className="contact container" id="contact">
        <div className="contact-container">
          <h2>Contact</h2>
          <p>
            I really appreciate the time and effort you've put into reviewing my
            projects and skills. Whether the response to my application is
            positive or negative, I am interested to hear back from you. Please
            feel free to contact me via email at{" "}
            <a href="mailto:mohammad.kizawi@gmail.com" className="email-link">
              mohammad.kizawi@gmail.com
            </a>
            .
          </p>
        </div>
        <h2>Or</h2>
        <span>Contact me directly from here:</span>
      </section>
      <section className="contact-form container">
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="contact-left"
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <div className="contact-left-title">
            <h2>Get in touch</h2>
          </div>
          <input
            type="hidden"
            name="access_key"
            value="6c316f22-1212-48c3-94a8-1f1f719831bd"
          />
          <input
            type="text"
            name="name"
            placeholder="Your Name / Company"
            className="contact-inputs"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="contact-inputs"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message..."
            className="contact-inputs"
            required
          ></textarea>
          <button type="submit">Submit &gt;&gt;&gt;</button>
        </form>
        <div className="contact-right">
          <img src="images/collaboration-picture.webp" alt="Collaboration" />
        </div>
      </section>
    </div>
  );
}

export default Contact;
