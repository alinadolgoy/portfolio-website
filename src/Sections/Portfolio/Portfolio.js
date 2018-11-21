import React, { Component } from 'react';
import './Portfolio.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import WorkCard from '../../Components/WorkCard/WorkCard';
import robot from '../../robot.png';
import placeHolderImage from '../../placeHolder.jpg';

class Portfolio extends Component {
    render() {
        return ( 
        <div className='PortfolioMain' id='portfolio'>
            <div className='portfolioContainer'>
            <div className='portfolioTop'>
                    <div className='sectionTitle'>
                        <SectionTitle sectionName={'Portfolio'}/>
                    </div> 
                    <div className='options'>
                       
                    </div>
                </div> {/* comment */}
                <div className='workCards'>
                <WorkCard  url="https://alinadolgoy.github.io/robofriends/"  cardImage={robot} />
                <WorkCard cardImage={placeHolderImage} />
                <WorkCard />
                <WorkCard cardImage={placeHolderImage} />          
                <WorkCard cardImage={placeHolderImage} />          
                <WorkCard cardImage={placeHolderImage} />          
                </div> 
            </div> 
        </div> // closes PortfolioMain
        );
    }
}

export default Portfolio;
