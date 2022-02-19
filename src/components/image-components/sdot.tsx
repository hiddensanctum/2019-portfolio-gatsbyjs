import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SdotImage:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query SdotPhotoQuery {
        allImageSharp(filter: {fluid: {originalName: {eq: "SDOT.png"}}}) {
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
      const image = getImage(data.allImageSharp.edges[0].node);
      return (
        <div>
          <GatsbyImage 
            image={image} 
            className='project-image'
            alt='Seattle Department of Transportation Website Screenshot'
          />
        </div>
      );
    }}
  />
);

export default SdotImage;
