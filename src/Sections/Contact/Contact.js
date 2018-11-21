import React from 'react';
import './Contact.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import githubLogo from './github-11-48.ico';
import linkedinLogo from './linkedin-6-48.ico';
import twitterLogo from './twitter-48.ico';

const FindMe = () => {
    return (
        <div className='mainFind' id='contact'>
            <div className='containerFind'>
            <SectionTitle  sectionName='contact'/>
            Email: alina.dolgoy@gmail.com
            <div className="white-circle-container">
                <a href='https://github.com/alinadolgoy' target='_blank'>  <div class="white-circle"> <img src={githubLogo} class='logos'></img> </div> </a>
                <a href='https://www.linkedin.com/in/alina-dolgoy-20010960/' target='_blank'>  <div class="white-circle"> <img src={linkedinLogo} class='logos'></img> </div> </a>
                <a href='https://twitter.com/Alina59512478' target='_blank'>  <div class="white-circle"> <img src={twitterLogo} class='logos'></img> </div> </a>
            </div>
            </div>
        </div>
    )
}

export default FindMe;