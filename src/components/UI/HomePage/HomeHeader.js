import React from 'react';
import { HomeHeaderWrapper } from './styledHomeHeader';

const HomeHeader = () => (
    <HomeHeaderWrapper>
        <div className="HomeHeader__content-wrapper">
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