import React, { FunctionComponent } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const SdotImage:FunctionComponent = () => (
  <StaticQuery
    query={graphql`
      query SDOTPhotoQuery {
        file(relativePath: { eq: "images/sdot.png" }) {
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
            alt='Seattle Department of Transportation Website Screenshot'
          />
        </div>
      );
    }}
  />
);

export default SdotImage;
