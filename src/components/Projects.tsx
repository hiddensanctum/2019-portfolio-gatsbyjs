import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import CohesionImage from './ImageComponents/Cohesion';
import SdotImage from './ImageComponents/SDOT';
import PortfolioImage from './ImageComponents/Portfolio';
import {
  AngularIcon,
  CSS3Icon,
  D3Icon,
  GatsbyIcon,
  HerokuIcon,
  HTML5Icon,
  JavascriptIcon,
  ReactIcon,
  TypeScriptIcon,
} from './SvgDevicons';
import '../styles/projects.scss';

const Projects:FunctionComponent = () => (
  <div className='projects-viewport' id='projects'>
    <div className='projects-layout'>
      <div className='projects-section' data-aos='fade-down'>
        <h2><FontAwesomeIcon icon={faDesktop} /> Projects</h2>
        <div className='projects-list'>
        <div className='project-card'>
            <a href='https://cohesiondata.ec.europa.eu/'>
              <PortfolioImage />
              <h3>This Portfolio Website</h3>
            </a>
            <p>The current website you are on is built with Gatsby.js, React, TypeScript, and various other technology. This website showcases the projects I have worked on in the past. This project was one of my first times using <a href='https://www.gatsbyjs.com/'>Gatsbyjs</a>. It is currently deployed
            on <a href='https://www.gatsbyjs.com/products/cloud/'>Gatsby Cloud</a>.
            </p>
            <div className='project-technologies'>
              <GatsbyIcon/>
              <TypeScriptIcon/>
              <JavascriptIcon/>
              <HTML5Icon/>
              <CSS3Icon/>
            </div>
          </div>
          <div className='project-card'>
            <a href='https://cohesiondata.ec.europa.eu/'>
              <CohesionImage />
              <h3>European Structural and Investment Funds</h3>
            </a>
            <p>The ESIF app is a React application that showcases how the EU is directing its investment funds through Europe. The app heavily relies on D3.js to create visualizations and is heavily used in the EU. Recently the application won the <a href='http://ec.europa.eu/regional_policy/en/newsroom/news/2017/03/30-03-2017-esi-funds-open-data-platform-receives-the-award-for-excellence-in-open-administration'>Excellence in Open Administration</a> in 2017 by the European Ombudsman</p>
            <div className='project-technologies'>
              <ReactIcon/>
              <D3Icon/>
              <JavascriptIcon/>
              <HTML5Icon/>
              <CSS3Icon/>
            </div>
          </div>
          <div className='project-card'>
            <a href='https://capitalprojects.seattle.gov/'>
              <SdotImage />
              <h3>Seattle Department of Transportation</h3>
            </a>
            <p>The Seattle Department of Transportation Capital Project Explorer App is an Angular.js app designed to allow citizens to get high-level information about Transportation projects going around the city. This application has gone through multi iterations and is used by many cities in the USA and Canada.</p>
            <div className='project-technologies'>
              <AngularIcon/>
              <JavascriptIcon/>
              <HTML5Icon/>
              <CSS3Icon/>
              <HerokuIcon/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Projects;
