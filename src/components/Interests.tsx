import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad, faEarthAsia, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import '../styles/interests.scss';

const Interests:FunctionComponent = () => (
  <div className="skills">
    <FontAwesomeIcon icon={faGamepad}/>
    <FontAwesomeIcon icon={faEarthAsia}/>
    <FontAwesomeIcon icon={faMobileScreenButton}/>
    <FontAwesomeIcon icon={faEarthAsia}/>
  </div>
);

export default Interests;
