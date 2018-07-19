import React, { Component } from 'react';
import './MenuItem.css';



class MenuItem extends Component {
    render () {
        return (
            <div className='item' onClick={this.props.clickHandler}>
               <a href={this.props.targetId}> {this.props.title} </a>
                
            </div> 
        );
    }
}

export default MenuItem;