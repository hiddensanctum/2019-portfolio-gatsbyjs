import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const SdotImage = () => (
  <StaticQuery
    query={graphql`
      query SdotPhotoQuery {
        allImageSharp(filter: {fluid: {originalName: {eq: 'SDOT.png'}}}) {
          edges {
            node {
              fluid {
                base64
                tracedSVG
                srcWebp
                srcSetWebp
                originalImg
                originalName
                presentationWidth
                presentationHeight
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const photo = data.allImageSharp.edges[0].node.fluid;
      return (
        <div>
          <Image fluid={photo} className='project-image'/>
        </div>
      );
    }}
  />
);

export default SdotImage;
