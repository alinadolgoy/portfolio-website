import React, { Component } from 'react';
import './WorkCard.css'

class WorkCard extends Component {
    render () {
        return (
            <div className='card'>
                <a href={this.props.url} target="_blank">
                 <div className='internalCard'>
                 <img src={this.props.cardImage} />
                 </div>
                </a>
            </div>
        );
    }
}

export default WorkCard;