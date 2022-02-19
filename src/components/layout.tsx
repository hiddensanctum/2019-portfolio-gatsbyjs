import React, { FunctionComponent } from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import useScript from 'react-script-hook';
import '../styles/layout.scss';

interface Props {
  children: any;
}

declare global {
  interface Window {
    AOS:any;
  }
}

const Layout:FunctionComponent<Props> = ({ children }) => {
  useScript({
    src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
    onload: () => window.AOS.init(),
  });

  return (
    <div className='layout'>
      <Helmet>
        <link href='https://fonts.googleapis.com/css2?family=Cardo&family=Josefin+Sans:wght@100;400&display=swap' rel='stylesheet' />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </Helmet>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;