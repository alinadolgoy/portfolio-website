import React, { Component } from 'react';
import './OptionsMenu.css';
import MenuItem from '../MenuItem/MenuIteam';

const OptionsMenu =(props) => {
        
        const menuItems = props.items.map((item,index) => {
          return  <MenuItem key={index} title={item.title} targetId={item.targetId}/>
        });

        return (
            <div className='OptionsMenucontainer'>
                {menuItems}
            </div>
        );
}

export default OptionsMenu;