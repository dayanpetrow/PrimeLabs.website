import React from 'react';
import { HomeHeaderWrapper } from './styledHomeHeader';

/*  
    #TODO:
    navigation component
*/

const HomeHeader = () => (
    <HomeHeaderWrapper>
        <div className="HomeHeader__content-wrapper">
            <div className="navigation-placeholder">navigation placeholder</div>
            <div className="HomeHeader__title">
                Blockchain Development & Consulting
            </div>
            <div className="HomeHeader__subtitle">
                Build your blockchain strategy and optimize your business.
            </div>
        </div>
    </HomeHeaderWrapper>
)

export default HomeHeader;