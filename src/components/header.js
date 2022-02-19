import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Image from 'gatsby-image';
import NavBar from './navbar';
import '../styles/header.scss';

const Header = () => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      __typename
      logo: file(absolutePath: {regex: "/logo.png/"}) {
        id
        childImageSharp {
          fixed(height: 40, width: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  return (
    <header className='header'>
      <Link to={'/'}>
        <Image
          fixed={data.logo.childImageSharp.fixed}
          alt={'jlchuang logo'}
          className='jlchuang-logo'
        />
      </Link>
      <NavBar />
    </header>
  );
};

export default Header;
