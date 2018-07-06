import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {
    render () {
        return (
            <div className="sectionTitleMain">
            <h1> {this.props.sectionName} </h1>
            
            </div>
        );
    }
}

export default SectionTitle;