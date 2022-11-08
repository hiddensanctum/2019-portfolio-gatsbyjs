import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGamepad,
  faPassport,
  faMobileScreenButton,
  faMugHot,
  faLaptop,
  faCameraRetro,
  faComments,
  faBrain,
  faUtensils,
  faMusic,
  faFilm,
  faMicrochip
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import '../styles/interests.scss';

const Interests:FunctionComponent = () => (
  <div className="interest" data-aos='fade-down'>
    <Tippy content={<span>I really enjoy topics related to Psychology and Neuroscience 🧠</span>}>
      <FontAwesomeIcon icon={faBrain}/>
    </Tippy>
    <Tippy content={<span>I am fluent in English and Mandarin 🗣️</span>}>
      <FontAwesomeIcon icon={faComments}/>
    </Tippy>
    <Tippy content={<span>My favorite game genres are RTS, 4X, and RPGs 🕹️</span>}>
      <FontAwesomeIcon icon={faGamepad}/>
    </Tippy>
    <Tippy content={<span>I am a technology enthusiasts and love to learn about the latest devices 📱</span>}>
      <FontAwesomeIcon icon={faMobileScreenButton}/>
    </Tippy>
    <Tippy content={<span>My go to coffee drink is a Latte ☕</span>}>
      <FontAwesomeIcon icon={faMugHot}/>
    </Tippy>
    <Tippy content={<span>I am an avid traveller ✈️</span>}>
      <FontAwesomeIcon icon={faPassport}/>
    </Tippy>
    <Tippy content={<span>My typical playlist includes Kpop, Cpop, Jpop, Jazz, and Lo Fi 🎵</span>}>
      <FontAwesomeIcon icon={faMusic}/>
    </Tippy>
    <Tippy content={<span>I enjoy Korean dramas, Chinese dramas, and Sci Fi shows 🍿</span>}>
      <FontAwesomeIcon icon={faFilm}/>
    </Tippy>
  </div>
);

export default Interests;
