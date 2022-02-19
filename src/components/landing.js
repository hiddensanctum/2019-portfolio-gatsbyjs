import React from "react"
import "../styles/landing.scss"

const Landing = () => {
  return (
    <div className="landing-section">
      <div className="landing-layout">
        <a href="#about" class="anchor">
          <div>
            <h1 className="intro">James Chuang</h1>
            <p className="subtitle">Front End Developer | Seattle, Washington</p>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Landing
