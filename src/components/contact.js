import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons"
import "../styles/contact.scss"

const Contact = () => {
  return (
    <div className="contact-section">
      <div className="contact-layout">
        <div className="contact-narrative">
          <h2>Contact Me</h2>
          <p>I am always interested in hearing about new ideas and opportunities! Feel free to contact me through the various means on the right. You can also download my resume in PDF format with the button below.</p>
        </div>
        <div className="contact-icons">
          <a 
            href="https://www.linkedin.com/in/jlchuang/"
            className="linkedin-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a
            href="https://github.com/hiddensanctum"
            className="github-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubAlt} className="github-icon" />
          </a>
          <a 
            href="mailto:jameschuang13@gmail.com"
            className="email-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
