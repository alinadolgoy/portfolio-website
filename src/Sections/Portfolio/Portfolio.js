import React, { Component } from 'react';
import './Portfolio.css';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import OptionsMenu from '../../Components/OptionsMenu/OptionsMenu';
import WorkCard from '../../Components/WorkCard/WorkCard';

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

                <div className='workCards'>
                <WorkCard  />
                <WorkCard />
                <WorkCard />          
                </div> 
            </div> 
        </div> // closes PortfolioMain
        );
    }
}

export default Portfolio;
