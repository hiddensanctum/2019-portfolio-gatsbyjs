import React from 'react';
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import '../styles/landing.scss';

const Landing = () => (

<StaticQuery
  query={graphql`
    query {
      desktop: file(relativePath: { eq: "landing-background.jpg" }) {
        childImageSharp {
          fluid(quality: 85, maxWidth: 1280) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `}
  render={data => {
    const imageData = data.desktop.childImageSharp.fluid
    return (
      <BackgroundImage
        Tag="section"
        className='landing-section'
        fluid={imageData}
      >
        <div className='landing-layout'>
          <a href='#about' className='anchor'>
            <div>
              <h1 className='intro' data-aos='fade-down'>James Chuang</h1>
              <p className='subtitle'>Senior Frontend Engineer | Seattle, Washington</p>
            </div>
          </a>
        </div>
      </BackgroundImage>
    )
  }}
/>

);

export default Landing;
