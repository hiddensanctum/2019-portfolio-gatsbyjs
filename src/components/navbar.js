import React from "react"
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
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
      </ul>
    </nav>
  )
}

export default Navbar
