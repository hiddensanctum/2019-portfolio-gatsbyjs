import React from "react"
import Header from './header.js'
import "../styles/layout.scss"

class Layout extends React.Component {
  render() {
    const { title, children } = this.props

    return (
      <div className="layout">
        <Header
          title={title}
        />
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
