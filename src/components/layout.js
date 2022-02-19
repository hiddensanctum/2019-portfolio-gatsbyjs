import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from './header';
import '../styles/layout.scss';

const Layout = ({ title, children }) => (
  <div className='layout'>
    <Helmet>
      <link href='https://fonts.googleapis.com/css?family=Josefin+Sans:100,400&display=swap' rel='stylesheet' />
    </Helmet>
    <Header
      title={title}
    />
    <main>{children}</main>
  </div>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};

export default Layout;
