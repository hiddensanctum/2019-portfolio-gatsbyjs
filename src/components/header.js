import React, { useState } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import NavBar from './navbar';
import '../styles/header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      __typename
      logo: file(absolutePath: {regex: "/logo.png/"}) {
        id
        childImageSharp {
          gatsbyImageData(
            width: 40
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);

  const [ExpandedState, toggleExpandedState] = useState(false);
  const image = getImage(data.logo)

  return (
    <header className={`header ${ExpandedState ? 'expanded' : ''}`}>
      <Link to={'/'}>
        <GatsbyImage
          image={image}
          alt={'jlchuang logo'}
          className='jlchuang-logo'
        />
      </Link>
      <NavBar onChange={toggleExpandedState} />
    </header>
  );
};

export default Header;
