import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../styles/experience.scss';

const Experience = () => (
  <div className='experience-section' name='experience' id='experience'>
    <div className='experience-layout'>
      <div className='experience' data-aos='fade-down'>
        <h2>
          <FontAwesomeIcon icon={faSuitcase} /> Experience
        </h2>
        <div className='experience-block'>
          <span>May 2018 - Present</span>
          <h3>Tyler Technologies</h3>
          <h4>Senior Software Engineer</h4>
          <p>Currently, I work as a Senior Software Engineer at the Data Insights Division of Tyler Technologies. I develop Performance KPI software that enables data analysis for governments to make data-based decisions for their public policies.</p>
        </div>
        <div className='experience-block'>
          <span>Apr 2014 - May 2018</span>
          <h3>Socrata</h3>
          <h4>Senior Front End Developer</h4>
          <p>Scope out large data exploration and storytelling applications for the public sector. Provide mentorship for newer developers. Develop an all-inclusive technical project plan and execute on that project plan. Create the UI/UX design and worked with the program manager to develop roadmaps.</p>
        </div>
        <div className='experience-block'>
          <span>Jan 2014 - Mar 2014</span>
          <h3>Socrata</h3>
          <h4>Consultant Web Developer</h4>
          <p>Volunteered as a consultant web developer and developed an Ember application to track feral cat populations in Seattle. The Ember application was a tool to help volunteers perform data entry and track the feral cat population.</p>
        </div>
      </div>
      <div className='education' data-aos='fade-down'>
        <h2>
          <FontAwesomeIcon icon={faGraduationCap} /> Education
        </h2>
        <div className='education-block'>
          <span>Oct 2013 - Dec 2013</span>
          <h3>Code Fellows</h3>
          <h4>Ruby on Rails</h4>
          <p>Entrance competitive immersive Coding Bootcamp taught by industry practitioners in the heart of Seattle’s tech community. Code Fellows takes high-potential individuals with moderate coding experience and turn them into great developers.</p>
        </div>
        <div className='education-block'>
          <span>Sep 2008 - May 2012</span>
          <h3>University of Maryland, College Park</h3>
          <h4>Bachelor of Science in Psychology</h4>
          <p>Neuroscience and Pre-med focus</p>
        </div>
      </div>
    </div>
  </div>
);

export default Experience;
