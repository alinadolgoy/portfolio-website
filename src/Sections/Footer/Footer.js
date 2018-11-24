import React from 'react';
import './Footer.css';
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu';

const Footer = () => {
    return (
        
        <div className='mainFooter' id='footer'>
            <div className='containerFooter'>
            <OptionsMenu items={[
                {title:'home', targetId: '#home'},
                {title: 'portfolio', targetId: '#portfolio'},
                {title: 'skills', targetId: '#skills'},
                {title: 'about', targetId: '#about'},
                {title: 'contact', targetId: '#contact'}
            ]} 
            />
            </div>
        </div>
    )
}

export default Footer;

