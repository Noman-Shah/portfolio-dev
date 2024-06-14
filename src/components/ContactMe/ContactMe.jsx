import React from "react";
import "./ContactMe.css";

const ContactMe = () => {
  return (
    <section id="contact" className="contact-section">
      <h5>Contact Me</h5>

      <div className="contact-content">
        
        <div style={{ flex: 1 }} className="box">
          <div className="contact-details-card">
            <a href="mailto:nomankhalidofficial@gmail.com" target="blank">
              <div className="icon">
              <img src="./assets/images/email-icon.svg" alt="nomankhalidofficial@gmail.com" />
              </div>
            </a>
            <p>nomankhalidofficial@gmail.com</p>
          </div>
        </div>
        <div style={{ flex: 1 }} className="box">
          <div className="contact-details-card">
            <a href="https://github.com/Noman-Shah" target="blank">
              <div className="icon">
              <img src="./assets/images/github-icon.svg" alt="nomankhalidofficial@gmail.com" />
              </div>
            </a>
            <p>https://github.com/Noman-Shah</p>
          </div>
        </div>
        <div style={{ flex: 1 }} className="box">
          <div className="contact-details-card">
            <a href="https://wa.me/+923175802946" target="blank">
              <div className="icon">
              <img src="./assets/images/whatsapp.png" alt="nomankhalidofficial@gmail.com" />
              </div>
            </a>
            <p>+923175802946</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMe;
