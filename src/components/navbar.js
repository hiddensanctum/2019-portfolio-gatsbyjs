import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
import "../styles/navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to={`#experience`}>Experience</Link></li>
        <li><Link to={`#projects`}>Projects</Link></li>
        <li><Link to={`#reviews`}>Journal</Link></li>
        <li><Link to={`#contact`}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
