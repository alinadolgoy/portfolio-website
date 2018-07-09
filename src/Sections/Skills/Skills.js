import React from 'react';
import './Skills.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import logo from './react.svg'

const Skills = () => {
    const skillsListArray= [
        {
        nameOfSkill: "HTML5",
        icon: '{logo}'   
        },
        {
        nameOfSkill: "CSS3",
        icon: ''   
        },
        {
        nameOfSkill: "JavaScript",
        icon: ''  
        },
        {
        nameOfSkill: "React",
        icon: ''       
        },
        {
        nameOfSkill: "git",
        icon: ''       
        }

    ];
    return (
        <div className='mainSkills' >
            <div className='containerSkills'>
            <SectionTitle sectionName='Skills' />
                <div className='skillList'>
            <img src = { logo } />
                </div>
            </div>
        </div>
    )
}

export default Skills;