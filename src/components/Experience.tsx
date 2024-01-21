import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import '../styles/experience.scss';

const Experience:FunctionComponent = () => (
  <div className='viewport' id='experience'>
    <div className='layout'>
      <div className='experience' data-aos='fade-down'>
        <h2>
          <FontAwesomeIcon icon={faSuitcase} /> Experience
        </h2>
        <div className='experience-block'>
          <span>Aug 2023 - Present</span>
          <h3>Tyler Technologies</h3>
          <h4>Lead Software Engineer</h4>
          <p>As a Technical Lead within the Data & Insight Division, I architect and draft comprehensive technical design documents that drive significant enhancements to our codebase. I spearheaded the strategic refactoring of frontend state management, ensuring optimal performance and maintainability. Collaborating cross-functionally, I liaise with security, design, and senior leadership teams to shape and innovate the technical product designs. Furthermore, I champion and lead investigations into the integration of AI tools within the division, fortifying the advanced capabilities of our system.</p>
        </div>
        <div className='experience-block'>
          <span>Aug 2021 - Aug 2023</span>
          <h3>Tyler Technologies</h3>
          <h4>Software Engineering Team Lead</h4>
          <p>As a dual-role professional, I dedicate 50% of my responsibilities to acting as a Technical Manager for three direct reports, and the remaining 50% to my role as a Senior Software Engineer. My daily responsibilities encompass strategizing project roadmaps, drafting comprehensive <strong>technical design documents</strong>, executing feature implementations, cultivating and mentoring my team members, and proficiently overseeing my direct reports.</p>
        </div>
        <div className='experience-block'>
          <span>May 2018 - Aug 2021</span>
          <h3>Tyler Technologies</h3>
          <h4>Senior Software Engineer</h4>
          <p>As a Senior Software Engineer in the Data Insights Division of Tyler Technologies, I developed advanced Performance KPI software. This cutting-edge tool empowers governmental bodies with robust data analysis capabilities, facilitating data-driven decisions that enhance public policy formulation and implementation.</p>
        </div>
        <div className='experience-block'>
          <span>Apr 2014 - May 2018</span>
          <h3>Socrata</h3>
          <h4>Senior Front End Developer</h4>
          <p>I create comprehensive data exploration and storytelling applications tailored for the public sector. Beyond technical development, I provide pivotal mentorship to emerging developers. I meticulously draft and implement holistic technical project plans. Additionally, I have hands-on involvement in shaping the UI/UX design and collaborate seamlessly with program managers to strategize development roadmaps.</p>
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
