import React, { Component } from 'react';
import './WorkCard.css'

const WorkCard = (props) => {
        return (
            <div className='card'>
                <a href={props.url} target="_blank">
                 <div className='internalCard'>
                 <img src={props.cardImage} />
                 </div>
                </a>
            </div>
        );
    
}

export default WorkCard;