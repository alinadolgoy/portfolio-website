import React, { Component } from 'react';
import './MenuItem.css';



const MenuItem = (props) => {
    
        return (
            <div className='item' onClick={props.clickHandler}>
               <a href={props.targetId}> {props.title} </a>
                
            </div> 
        );
    
}

export default MenuItem;