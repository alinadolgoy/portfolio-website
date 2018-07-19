import React, { Component } from 'react';
import './Portfolio.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu';
import WorkCard from '../../Components/WorkCard/WorkCard';
import Scroll from '../../Components/Scroll/Scroll';
import robot from '../../robot.png';

class Portfolio extends Component {
    render() {
        return ( 
        <div className='PortfolioMain'>
            <div className='portfolioContainer'>
            <div className='portfolioTop'>
                    <div className='sectionTitle'>
                        <SectionTitle sectionName={'Portfolio'}/>
                    </div> 
                    <div className='options'>
                       
                    </div>
                </div> {/* comment */}
                <Scroll>
                <div className='workCards'>
                <WorkCard  url="https://alinadolgoy.github.io/robofriends/"  cardImage={robot} />
                <WorkCard />
                <WorkCard />
                <WorkCard />          
                <WorkCard />          
                <WorkCard />          
          
                </div> 
                </Scroll>
            </div> 
        </div> // closes PortfolioMain
        );
    }
}

export default Portfolio;
