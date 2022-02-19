import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import "../styles/experience.scss"

const Experience = () => {
  return (
    <div className="experience-section" name="experience">
      <div className="experience-layout">
        <div className="experience">
          <h2>
            <FontAwesomeIcon icon={faSuitcase} /> Experience
          </h2>
          <div className="experience-block">
            <span>May 2018 - Present</span>
            <h3>Tyler Technologies</h3>
            <h4>Senior Software Engineer</h4>
            <p>Currently I work as a Senior Software Engineer in the Data Insights Division of Tyler Technologies developing Performance KPI software to enable data analysis for government data to drive data based decisions.</p>
          </div>
          <div className="experience-block">
            <span>Apr 2014 - May 2018</span>
            <h3>Socrata</h3>
            <h4>Senior Front End Developer</h4>
            <p>Scope out large data exploration and story telling applications for the public sector. Provide mentorship for newer developers. Develop all-inclusive technical project plan and excute on that project plan. Create the UI/UX design and worked with program manager to develop roadmaps.</p>
          </div>
          <div className="experience-block">
            <span>Jan 2014 - Mar 2014</span>
            <h3>Socrata</h3>
            <h4>Constultant Web Developer</h4>
            <p>Volunteered as a consultant web developer and developed an Ember application to track feral cat populations in Seattle. The Ember application is designed to be a tool to help volunterrs do data entry and track the feral cat population.</p>
          </div>
        </div>
        <div className="education">
          <h2>
            <FontAwesomeIcon icon={faGraduationCap} /> Education
          </h2>
          <div className="education-block">
            <span>Oct 2013 - Dec 2013</span>
            <h3>Code Fellows</h3>
            <h4>Ruby on Rails</h4>
            <p>Entrance competitive immersive coding bootcamp taught by industry practitioners in the heart of Seattle’s tech community. Code Fellows is designed to take high-potential individuals with moderate coding experience and turn them into great developers.</p>
          </div>
          <div className="education-block">
            <span>Sep 2008 - May 2012</span>
            <h3>University of Maryland, College Park</h3>
            <h4>Bachelor of Science in Psychology</h4>
            <p>Neuroscience and Pre-med focus</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
