import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import NavBar from './navbar.js'
import "../styles/header.scss"

import { rhythm } from "../utils/typography"

const Header = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      __typename
      logo: file(absolutePath: {regex: "/logo.png/"}) {
        id
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }    
  `)
  return (
    <header className="header">
      <Link
        style={{
          display: `flex`,
          alignItems: `center`,
          boxShadow: `none`,
          textDecoration: `none`,
          color: `inherit`,
        }}
        to={`/`}
      >
        <Image
          fixed={data.logo.childImageSharp.fixed}
          alt={"mindfulgadgets logo"}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 40,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </Link>
      <NavBar />
    </header>
  )
}

export default Header
