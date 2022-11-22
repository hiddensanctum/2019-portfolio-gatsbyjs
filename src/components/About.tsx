import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Interests from './Interests';
import '../styles/about.scss';

const About:FunctionComponent = () => (
  <div className='viewport' id='about'>
    <div className='layout'>
      <div className='section'>
        <div className='about-block'>
          <div className='profile-section' data-aos='fade-down'>
            <FontAwesomeIcon icon={faUserCircle} className='profile-icon' />
            <h2>About Me</h2>
            <h3>I am a Software Team Lead in Seattle, Washington</h3>
            <p>Studied at Code Fellows RoR Track and UMCP Bachelors of Science in Psychology,
              I predominately focus on the <strong>Front-End Stack</strong> tackling issues of
              Accessibility, Design Systems, and User Experiences. Mouse over the icons to learn
              a bit more about me</p>
          </div>
          <div className='interest-section' data-aos='fade-down'>
            <Interests/>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
