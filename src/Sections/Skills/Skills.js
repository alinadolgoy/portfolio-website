import React from 'react';
import './Skills.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import react from './react.svg';
import html from './html5.svg';
import css from './css3.svg';
import javascript from './javascript.svg';
import github from './github.svg';

const Skills = () => {
    
    return (
        <div className='mainSkills' id='skills'>
            <div className='containerSkills'>
            <SectionTitle sectionName='Skills' />
                <div className='skillList'>
            <div class="white-circle-skill"> <img src={ html } class='skills-img'></img> </div>
            <div class="white-circle-skill"> <img src={ css } class='skills-img'></img> </div>
            <div class="white-circle-skill"> <img src={ javascript } class='skills-img'></img> </div>
            <div class="white-circle-skill"> <img src={ react } class='skills-img'></img> </div>
            <div class="white-circle-skill"> <img src={ github } class='skills-img'></img> </div>
            </div>
            </div>
        </div>
    )
}

export default Skills;