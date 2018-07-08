import React, { Component } from 'react';
import './SectionTitle.css';

class SectionTitle extends Component {
    render () {
        return (
            <div className="sectionTitleMain">
            <p> {this.props.sectionName} </p>
            
            </div>
        );
    }
}

export default SectionTitle;