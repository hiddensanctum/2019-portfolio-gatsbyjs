import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import Skills from './skills';
import "../styles/about.scss"

const About = () => {
  return (
    <div className="about-viewport" name="about">
      <div className="about-layout">
        <div className="about-section">
          <div className="profile-section">
            <FontAwesomeIcon icon={faUserCircle} className="profile-icon" />
          </div>
          <h2>About Me</h2>
          <h3>I am a Full Stack developer from Seattle, Washington</h3>
          <p>I studied at Code Fellows and have a Bachelors of Science in Psychology from the University of Maryland. My mission is to bridge the gap between Psychology and Technology to create application that are more user friendly.</p>
        </div>
        <div className="skill-section">
          <Skills />
        </div>
      </div>
    </div>
  )
}
 
export default About
