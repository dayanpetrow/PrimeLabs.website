import React from 'react';
import { StyledHeader } from './styledHeaderSection';
import Fade from 'react-reveal/Fade';

const HeaderSection = () => (  
    <StyledHeader>
        <div className="WhiteLabel__header-content-wrapper">
            <Fade top duration={1000}>
                <div className="WhiteLabel__page-name">
                    Services
                </div>
            </Fade>
            <Fade big duration={1000}>
            <div className="WhiteLabel__page-title">
                White Label Exchange Solution
            </div>
            </Fade>
            <Fade big duration={1000}>
            <div className="WhiteLabel__page-description">
                Software solution to run a digital asset exchange or cryptocurrency 
                exchange, with fully-hosted options available. Custom deployments 
                may be launched in 60 days.
            </div>
            </Fade>
            <Fade bottom duration={1000}>
                <div className="WhiteLabel__page-description">
                    Integrate already proven exchange to your core platform 
                    and accelerate your GTM strategy.
                </div>
            </Fade>
        </div>
    </StyledHeader>
)

export default HeaderSection;