import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CohesionImage:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query CohesionPhotoQuery {
        file(relativePath: { eq: "images/cohesion.png" }) {
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
            alt='European Structural and Investment Fund Website Screenshot'
          />
        </div>
      );
    }}
  />
);

export default CohesionImage;
