import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Interests from './Interests';
import '../styles/about.scss';

const About:FunctionComponent = () => (
  <div className='viewport' id='about'>
    <div className='layout'>
      <div className='section' data-aos='fade-down'>
        <div className='profile-section'>
          <FontAwesomeIcon icon={faUserCircle} className='profile-icon' />
        </div>
        <h2>About Me</h2>
        <h3>I am a Software Team Lead in Seattle, Washington</h3>
        <p>Studied at Code Fellows RoR Track and UMCP Bachelors of Science in Psychology,
          I predominately focus on Front End Stacks tackling issues of Accessibility, Design Systems, and User Experiences.</p>
      </div>
      <div className='skill-section' data-aos='fade-down'>
        <Interests/>
      </div>
    </div>
  </div>
);

export default About;
