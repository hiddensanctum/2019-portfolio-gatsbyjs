import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import '../styles/landing.scss';

const Landing:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "landing-background.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2048
              quality: 85
              layout: FULL_WIDTH
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `}
    render={data => {
      const image = getImage(data.desktop);
      const bgImage = convertToBgImage(image);

      return (
        <BackgroundImage
          Tag="section"
          className='landing-section'
          {...bgImage}
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
