import React from 'react';
import Helmet from 'react-helmet';
import Header from './header';
import '../styles/layout.scss';

class Layout extends React.Component {
  render() {
    const { title, children } = this.props;

    return (
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
  }
}

export default Layout;
