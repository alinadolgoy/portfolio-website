import React, { Component } from 'react';
import './SectionTitle.css';

const SectionTitle = (props) => {
        return (
            <div className="sectionTitleMain">
            <p> {props.sectionName} </p>
            </div>
        );
    
}

export default SectionTitle;