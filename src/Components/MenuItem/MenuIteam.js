import React, { Component } from 'react';
import './MenuItem.css';



class MenuItem extends Component {
    render () {
        return (
            <div className='item'>
                {this.props.title}
            </div> 
        );
    }
}

export default MenuItem;