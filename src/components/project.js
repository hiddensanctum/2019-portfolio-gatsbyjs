import React from "react"
import Image from "gatsby-image"
import "../styles/project.scss"

const Project = (props) => {
  const { title, image, description } = props;
  return (
    <div className="project-card">
      {image ? (<img srcset={image} className="project-image" />): null}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Project
