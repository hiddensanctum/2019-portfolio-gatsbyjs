import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import {
  AngularIcon,
  AwsIcon,
  CSS3Icon,
  D3Icon,
  EslintIcon,
  GatsbyIcon,
  GithubIcon,
  GraphQLIcon,
  HerokuIcon,
  HTML5Icon,
  JavascriptIcon,
  JestIcon,
  JiraIcon,
  JQueryIcon,
  PostgresIcon,
  RailsIcon,
  ReactIcon,
  ReduxIcon,
  RubyIcon,
  SassIcon,
  StorybookIcon,
  TypeScriptIcon,
  UbuntuIcon,
  VscodeIcon
} from './SvgDevicons';
import LabeledSkillIcon from './LabeledSkillIcon';
import '../styles/skills.scss';

const Skills:FunctionComponent = () => (
  <div className='viewport' id='skills'>
    <div className='layout'>
      <div className='section'>
        <h2>
          <FontAwesomeIcon icon={faFlask}/> Skills
        </h2>
        <div className='skill-block'>
          <div className='framework-block' data-aos='fade-down'>
            <h3>Frameworks & Tools</h3>
            <p>My framework of choice is React.js but I'm used various frameworks and tools over the years (mouseover icons to see the name)</p>
            <div className='items'>
              <LabeledSkillIcon icon={(<AngularIcon/>)} label='Angular'/>
              <LabeledSkillIcon icon={(<AwsIcon/>)} label='Amazon Web Services'/>
              <LabeledSkillIcon icon={(<D3Icon/>)} label='D3'/>
              <LabeledSkillIcon icon={(<EslintIcon/>)} label='Eslint'/>
              <LabeledSkillIcon icon={(<GatsbyIcon/>)} label='Gatsby'/>
              <LabeledSkillIcon icon={(<GithubIcon/>)} label='Github'/>
              <LabeledSkillIcon icon={(<GraphQLIcon/>)} label='GraphQL'/>
              <LabeledSkillIcon icon={(<HerokuIcon/>)} label='Heroku'/>
              <LabeledSkillIcon icon={(<JestIcon/>)} label='Jest'/>
              <LabeledSkillIcon icon={(<JiraIcon/>)} label='Jira'/>
              <LabeledSkillIcon icon={(<JQueryIcon/>)} label='jQuery'/>
              <LabeledSkillIcon icon={(<PostgresIcon/>)} label='PostgreSQL'/>
              <LabeledSkillIcon icon={(<RailsIcon/>)} label='Ruby on Rails'/>
              <LabeledSkillIcon icon={(<ReactIcon/>)} label='React'/>
              <LabeledSkillIcon icon={(<ReduxIcon/>)} label='Redux'/>
              <LabeledSkillIcon icon={(<StorybookIcon/>)} label='Storybook'/>
              <LabeledSkillIcon icon={(<UbuntuIcon/>)} label='Ubuntu'/>
              <LabeledSkillIcon icon={(<VscodeIcon/>)} label='Visual Studio Code'/>
            </div>
          </div>
          <div className='language-block' data-aos='fade-down'>
            <h3>Languages</h3>
            <p>My languages of choice are JavaScript, Ruby, HTML, and CSS:</p>
            <div className='items'>
              <LabeledSkillIcon icon={(<CSS3Icon/>)} label='CSS3'/>
              <LabeledSkillIcon icon={(<HTML5Icon/>)} label='HTML5'/>
              <LabeledSkillIcon icon={(<RubyIcon/>)} label='Ruby'/>
              <LabeledSkillIcon icon={<JavascriptIcon/>} label='JavaScript'/>
              <LabeledSkillIcon icon={<SassIcon/>} label='Sass'/>
              <LabeledSkillIcon icon={<TypeScriptIcon/>} label='TypeScript'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Skills;
