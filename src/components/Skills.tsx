import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import {
  AngularIcon,
  CSS3Icon,
  D3Icon,
  GatsbyIcon,
  HerokuIcon,
  HTML5Icon,
  JavascriptIcon,
  ReactIcon,
  TypeScriptIcon,
  RubyIcon,
  RailsIcon
} from './SvgDevicons';
import LabeledSkillIcon from './LabeledSkillIcon';
import '../styles/skills.scss';

const Skills:FunctionComponent = () => (
  <div className='viewport' id='skills'>
    <div className='layout'>
      <div className='section' data-aos='fade-down'>
        <h2>
          <FontAwesomeIcon icon={faFlask}/> Skills
        </h2>
        <div className='skill-block'>
          <div className='framework-block'>
            <h3>Frameworks & Tools</h3>
            <p>Below are the frameworks and tools I have experience in (mouseover icons to see the name).</p>
            <div className='items'>
              <LabeledSkillIcon icon={(<ReactIcon/>)} level={2} label='React'/>
              <LabeledSkillIcon icon={(<D3Icon/>)} level={2} label='D3'/>
              <LabeledSkillIcon icon={(<AngularIcon/>)} level={1} label='Angular'/>
              <LabeledSkillIcon icon={(<GatsbyIcon/>)} level={1} label='Gatsby'/>
              <LabeledSkillIcon icon={(<HerokuIcon/>)} level={1} label='Heroku'/>
              <LabeledSkillIcon icon={(<RailsIcon/>)} level={1} label='Ruby on Rails'/>
            </div>
          </div>
          <div className='language-block'>
            <h3>Languages</h3>
            <p>Below are the languages I use (ordered by experience).</p>
            <div className='items'>
              <LabeledSkillIcon icon={<JavascriptIcon/>} level={2} label='JavaScript'/>
              <LabeledSkillIcon icon={<TypeScriptIcon/>} level={1} label='TypeScript'/>
              <LabeledSkillIcon icon={(<HTML5Icon/>)} level={2} label='HTML5'/>
              <LabeledSkillIcon icon={(<CSS3Icon/>)} level={2} label='CSS3'/>
              <LabeledSkillIcon icon={(<RubyIcon/>)} level={1} label='Ruby'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
