import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Skills from './skills';
import '../styles/about.scss';

const About = () => (
  <div className='about-viewport' name='about'>
    <div className='about-layout'>
      <div className='about-section'>
        <div className='profile-section'>
          <FontAwesomeIcon icon={faUserCircle} className='profile-icon' />
        </div>
        <h2>About Me</h2>
        <h3>I am a Senior Software Engineer in Seattle, Washington</h3>
        <p>Studied at Code Fellows RoR Track and UMCP Bachelors of Science in Psychology,
          I predominately focus on Front End Stacks tackling issues of Accessibility, D
          esign Systems, and User Experiences.</p>
      </div>
      <div className='skill-section'>
        <Skills />
      </div>
    </div>
  </div>
);

export default About;
