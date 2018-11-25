import React, { Component } from 'react';
import './TopBar.css';
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu';
import mainLogo from './alinadolgoy.svg';


const TopBar = (props) => {
        return (
         <div className='topNavMainContainer'>       
            <div className='TopNavMain'>   
                <div className='logo'>
                    <img src= { mainLogo } alt="logo" height="20px" />
                </div>
                <div className='nav'>
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
        </div> 
        );
}

export default TopBar;