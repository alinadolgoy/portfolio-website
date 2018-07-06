import React, { Component } from 'react';
import './OptionsMenu.css';
import MenuItem from '../MenuItem/MenuIteam';

class OptionsMenu extends Component {
 


    render () {
        const menuItems = this.props.items.map((item,index) => {
          return  <MenuItem key={index} title={item.title} clickHandler={item.clickHandler} />
        });

        return (
            <div className='OptionsMenucontainer'>
                {menuItems}



            </div>
        );
    }
}

export default OptionsMenu;