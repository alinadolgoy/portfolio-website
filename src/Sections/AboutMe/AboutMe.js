import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import './AboutMe.css'

const AboutMe = () => {
return (
    <div className='main' id='about'>
        <div className='container'>
        <SectionTitle sectionName='About Me' />
        <div className="text-container">
        I’m new to the coding world but been living the tech world for many years in various roles. I discovered my passion for code while working at a Toronto based consultancy with some amazing people who live and breath code, innovation and agile, it was hard not to get caught up in the fun. 
        Been learning code in my free time for over a year now, enjoying every moment, and looking forward to making it a full time job.
        </div>
        </div>
    </div>
    )
}

export default AboutMe;




