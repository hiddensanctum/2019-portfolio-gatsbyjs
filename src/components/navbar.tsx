import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import '../styles/navbar.scss';

interface Props {
  onChange?: Function;
}

const Navbar:FunctionComponent<Props> = ({ onChange }) => {
  const [MobileNav, toggleMobileNav] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(MobileNav);
    }
  });

  const navBarContent = (device) => (device === 'navbar-mobile' ? (
    <ul className={device}>
      <li><Link to={'/'} onClick={() => toggleMobileNav(!MobileNav)}>Home</Link></li>
      <li><Link to={'#about'} onClick={() => toggleMobileNav(!MobileNav)}>About</Link></li>
      <li><Link to={'#experience'} onClick={() => toggleMobileNav(!MobileNav)}>Experience</Link></li>
      <li><Link to={'#projects'} onClick={() => toggleMobileNav(!MobileNav)}>Projects</Link></li>
      <li><a href='https://medium.com/@jlchuang' onClick={() => toggleMobileNav(!MobileNav)}><FontAwesomeIcon icon={faMedium} /> Journal</a></li>
      <li><Link to={'#contact'} onClick={() => toggleMobileNav(!MobileNav)}>Contact</Link></li>
    </ul>
  ) : (
    <ul className={device}>
      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'#about'}>About</Link></li>
      <li><Link to={'#experience'}>Experience</Link></li>
      <li><Link to={'#projects'}>Projects</Link></li>
      <li><a href='https://medium.com/@jlchuang' target='_blank'><FontAwesomeIcon icon={faMedium} className='medium' /> Journal</a></li>
      <li><Link to={'#contact'}>Contact</Link></li>
    </ul>
  ));

  return (
    <nav className='navbar'>
      <button
        aria-label='mobile navigation'
        className={`mobile-nav ${MobileNav ? 'active' : ''}`}
        onClick={() => toggleMobileNav(!MobileNav)}>
        <FontAwesomeIcon icon={MobileNav ? faTimes : faBars} />
      </button>
      {MobileNav ? navBarContent('navbar-mobile') : null}
      {navBarContent('navbar-laptop')}
    </nav>
  );
};

export default Navbar;
