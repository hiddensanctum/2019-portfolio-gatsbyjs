import React from 'react';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import '../styles/labeledSkillIcon.scss'

interface LabeledSkillIconProps {
  label: string;
  level?: 1 | 2 | 3;
  icon: Element | JSX.Element;
}

const renderSkillLevel = (skill: number) => {
  switch (skill) {
    case 1:
      return (
        <>
          <FontAwesomeIcon className='colored' icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      )
      break;
    case 2:
      return (
        <>
          <FontAwesomeIcon className='colored' icon={faStar} />
          <FontAwesomeIcon className='colored' icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      )
      break;
    case 3:
      return (
        <>
          <FontAwesomeIcon className='colored' icon={faStar} />
          <FontAwesomeIcon className='colored' icon={faStar} />
          <FontAwesomeIcon className='colored' icon={faStar} />
        </>
      )
      break;
    default:
      break;
  }
}

const LabeledSkillIcon = ({
  label,
  level,
  icon
}: LabeledSkillIconProps) => (
  <Tippy content={<span>{label}</span>} placement='bottom'>
    <div className='labeledSkillIcon' >
      {icon}
      {level ? (
        <div className='level-stars'>
          {renderSkillLevel(level)}
        </div>
      ) : null}
    </div>
  </Tippy>
);

export default LabeledSkillIcon;
