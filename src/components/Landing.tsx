import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import '../styles/landing.scss';

const Landing:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query LandingBannerQuery {
        file(relativePath: { eq: "images/landing-background.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
            )
          }
        }
      }
    `}
    render={data => {
      const image = getImage(data.file);

      return (
        <>
          <GatsbyImage
            image={image!}
            alt='background image'
            className='landing-section'
          />
          <div className='landing-layout'>
            <a href='#about' className='anchor'>
              <div>
                <h1 className='intro' data-aos='fade-down'>James Chuang</h1>
                <p className='subtitle'>Software Team Lead | Seattle, Washington</p>
              </div>
            </a>
          </div>
        </>
      )
    }}
  />
);

export default Landing;
