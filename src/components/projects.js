import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import "../styles/projects.scss"

const Projects = () => {
  return (
    <div className="projects-section">
      <div className="projects-layout">
        <h2><FontAwesomeIcon icon={faDesktop} /> Projects</h2>
      </div>
    </div>
  )
}

export default Projects
