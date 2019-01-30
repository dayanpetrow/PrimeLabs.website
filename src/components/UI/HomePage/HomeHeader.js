import React from 'react';
import { HomeHeaderWrapper } from './styledHomeHeader';
import Fade from 'react-reveal/Fade';

const HomeHeader = () => (
    <HomeHeaderWrapper>
        <div className="HomeHeader__content-wrapper">
            <Fade top duration={750}>
                <div className="HomeHeader__title">
                    Blockchain Development & Consulting
                </div>
            </Fade>
            <Fade bottom duration={1000} delay={250}>
                <div className="HomeHeader__subtitle">
                    Build your blockchain strategy and optimize your business.
                </div>
            </Fade>
        </div>
    </HomeHeaderWrapper>
)

export default HomeHeader;