import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedinIn, faGithubAlt, faMedium } from '@fortawesome/free-brands-svg-icons';
import '../styles/contact.scss';

const Contact:FunctionComponent = () => (
  <div className='viewport' id='contact'>
    <div className='layout'>
      <div className='contact-narrative' data-aos='fade-down'>
        <h2>Contact Me</h2>
        <p>I'm always eager to discuss fresh ideas and opportunities. Please don't hesitate to reach out via the contact options to the right.</p>
      </div>
      <div className='contact-icons' data-aos='fade-down'>
        <a
          aria-label="Linkedin Page"
          href='https://www.linkedin.com/in/jlchuang/'
          className='linkedin-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a
          aria-label="Github Page"
          href='https://github.com/hiddensanctum'
          className='github-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faGithubAlt} className='github-icon' />
        </a>
        <a
          aria-label="Medium Journal Link"
          href='https://medium.com/@jlchuang'
          className='medium-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faMedium} />
        </a>
        <a
          aria-label="hello@jlchuang.com Email Link"
          href='mailto:hello@jlchuang.com'
          className='email-link'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
      </div>
    </div>
  </div>
);

export default Contact;
