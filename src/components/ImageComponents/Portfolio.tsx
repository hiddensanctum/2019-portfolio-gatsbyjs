import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const PortfolioImage:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query PortfolioImageQuery {
        file(relativePath: { eq: "images/portfolio.png" }) {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `}
    render={(data) => {
      const image = getImage(data.file);
      return (
        <div>
          <GatsbyImage
            image={image!}
            className='project-image'
            alt='jlchuang.com Portfolio Website Screenshot'
          />
        </div>
      );
    }}
  />
);

export default PortfolioImage;
