import React from 'react';
import './MainPicture.css';
import TopBar from '../TopBar/TopBar';


const MainPicture = (props) => {
    return (
        <div className="mainPic">
            <TopBar />
                <div className="quoteContainer"> 
                    <div className='quote marg-bot'> 
                         "I am still learning"
                    </div>
                    <div className='quote'>
                         - Michaelangelo at age 87
                    </div>
                </div>
         </div>
    );
}

export default MainPicture;