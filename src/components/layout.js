import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './header';
import useScript from 'react-script-hook';
import '../styles/layout.scss';

const Layout = ({ title, children }) => {
  useScript({
    src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
    onload: () =>  window.AOS.init(),
  });

  return (
    <div className='layout'>
      <Helmet
        async={false}
      >
        <link href='https://fonts.googleapis.com/css2?family=Cardo&family=Josefin+Sans:wght@100;400&display=swap' rel='stylesheet' />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </Helmet>
      <Header
        title={title}
      />
      <main>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Layout;
