import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { Link } from "gatsby"
import { ThemeToggler } from 'gatsby-plugin-dark-mode'
import "../styles/navbar.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to={`/experience`}>Experience</Link></li>
        <li><Link to={`/projects`}>Projects</Link></li>
        <li><Link to={`/reviews`}>Journal</Link></li>
        <li><Link to={`/contact`}>Contact</Link></li>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                className="hidden"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              {theme === 'dark' ? 
                (<FontAwesomeIcon icon={faMoon} />) :
                (<FontAwesomeIcon icon={faSun} className="dark" />)}
            </label>
          )}
        </ThemeToggler>
      </ul>
    </nav>
  )
}

export default Navbar
