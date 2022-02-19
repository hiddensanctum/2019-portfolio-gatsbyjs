import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn, faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { Link } from "gatsby"
import "../styles/contact.scss"

const Contact = (props) => {
  return (
    <div className="contact-section">
      <div className="contact-layout">
        <div className="contact-narrative">
          <h2>Contact Me</h2>
          <p>I am always interested in hearing about new ideas and opportunities! Feel free to contact me through the various means on the right. You can also download my resume in PDF format with the button below.</p>
        </div>
        <div className="contact-icons">
          <Link to={`https://www.linkedin.com/in/jlchuang/`}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
          <Link to={`https://github.com/hiddensanctum`}>
            <FontAwesomeIcon icon={faGithubAlt} />
          </Link>
          <Link to={`mailto:jameschuang13@gmail.com`}>
            <FontAwesomeIcon icon={faEnvelopeOpen} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact
