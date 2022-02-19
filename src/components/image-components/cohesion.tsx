import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CohesionImage:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query CohesionPhotoQuery {
        allImageSharp(filter: {gatsbyImageData: {eq: "cohesion.png"}}) {
          edges {
            node {
              gatsbyImageData(
                width: 600
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = getImage(data.allImageSharp.edges[0].node)
      return (
        <div>
          <GatsbyImage 
            image={image} 
            className='project-image' 
            alt='European Structural and Investment Fund Website Screenshot'
          />
        </div>
      );
    }}
  />
);

export default CohesionImage;
