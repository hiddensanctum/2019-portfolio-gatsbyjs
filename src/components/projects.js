import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import Project from './project';
import "../styles/projects.scss"

const Projects = () => {
  return (
    <div className="projects-viewport" name="projects">
      <div className="projects-layout">
        <div className="projects-section">
          <h2><FontAwesomeIcon icon={faDesktop} /> Projects</h2>
          <div className="projects-list">
            <Project
              title="European Structural and Investment Funds"
              description="The ESIF app is a React appliation that is designed to showcase how the EU is directing their investment funds through Europe. The app heavily relies on D3.js to create visualizations and heavily used in the EU. Recently the application won the Excellence in Open Administration in 2017 by the European Ombudsman"
              image="/static/d08cf9aeecf9f6c50fcc7567ad90f19b/59beb/cohesion.png 200w,\n/static/d08cf9aeecf9f6c50fcc7567ad90f19b/c0bbd/cohesion.png 400w,\n/static/d08cf9aeecf9f6c50fcc7567ad90f19b/a54c6/cohesion.png 800w,\n/static/d08cf9aeecf9f6c50fcc7567ad90f19b/9911c/cohesion.png 1200w,\n/static/d08cf9aeecf9f6c50fcc7567ad90f19b/c8bd7/cohesion.png 1600w,\n/static/d08cf9aeecf9f6c50fcc7567ad90f19b/f4684/cohesion.png 3354w"
            />
            <Project
              title="Seattle Department of Transportation"
              description="The Seattle Department of Transportation Capital Project Explorer App is an Angular.js app designed to allow citizens to get high level information about Transportation projects going around the city. This application has gone through multi iterations and is now a SASS product that is offered to multiple cities in USA and Canada."
              image="/static/a5107d22156b0ce95919d7d62ff46b48/59beb/SDOT.png 200w,\n/static/a5107d22156b0ce95919d7d62ff46b48/c0bbd/SDOT.png 400w,\n/static/a5107d22156b0ce95919d7d62ff46b48/a54c6/SDOT.png 800w,\n/static/a5107d22156b0ce95919d7d62ff46b48/9911c/SDOT.png 1200w,\n/static/a5107d22156b0ce95919d7d62ff46b48/c8bd7/SDOT.png 1600w,\n/static/a5107d22156b0ce95919d7d62ff46b48/b403a/SDOT.png 3358w"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
