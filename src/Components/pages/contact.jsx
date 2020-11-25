import React from "react";
import ContactForm from "./contactForm";
export default function Projects() {
  return (
    <div className="contact-page">
      <div className="contact">
        <h1>Contact Info:</h1>
        <h3>
          Email:{" "}
          <a href="mailto:dbarnold321@gmail.com">dbarnold321@gmail.com</a>
        </h3>
        <h3>
          phone: <a href="tel:3035199508">(303) 519-9508</a>
        </h3>
        <div className = 'link-container'>
          <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/devin-arnold-a7539a52/" >LinkedIn</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/darnold001">GitHub</a>
          <a target="_blank" rel="noreferrer" href="https://gitlab.com/darnold001">GitLab</a>
        </div>
      </div>
      <ContactForm />
    </div>
  );
}
