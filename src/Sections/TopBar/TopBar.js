import React, { Component } from 'react';
import './TopBar.css';
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu';
import logoAlina from './logoAlina.svg';

const testFunction = () => {console.log('it worked');};

class TopBar extends Component {
    render () {
        return (
         <div className='topNavMainContainer'>       
            <div className='TopNavMain'>   
                <div className='logo'>
                    <img src= { logoAlina } alt="logo" height="20px" />
                </div>
                <div className='nav'>
                <OptionsMenu items={[
                    {title:'home', clickHandler: testFunction},
                    {title: 'portfolio', clickHandler: testFunction},
                    {title: 'skills', clickHandler: testFunction},
                    {title: 'about', clickHandler: testFunction},
                    {title: 'contact', clickHandler: testFunction}
                
                ]} />
                </div>
            </div>   
        </div> 
        );
    }
}

export default TopBar;