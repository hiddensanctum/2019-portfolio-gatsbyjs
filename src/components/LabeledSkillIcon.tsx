import React from 'react';
import Tippy from '@tippyjs/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import 'tippy.js/dist/tippy.css';
import '../styles/labeledSkillIcon.scss'

interface LabeledSkillIconProps {
  label: string;
  level: 1 | 2 | 3;
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
  }
}

const LabeledSkillIcon = ({
  label,
  level,
  icon
}: LabeledSkillIconProps) => (
  <Tippy content={<span>{label}</span>}>
    <div className='labeledSkillIcon' >
      {icon}
      <div className='level-stars'>
        {renderSkillLevel(level)}
      </div>
    </div>
  </Tippy>
);

export default LabeledSkillIcon;
