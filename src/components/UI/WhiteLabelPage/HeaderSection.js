import React from 'react';
import { StyledHeader } from './styledHeaderSection';

const HeaderSection = () => (  
    <StyledHeader>
        <div className="WhiteLabel__header-content-wrapper">
            <div className="WhiteLabel__page-name">
                Services
            </div>
            <div className="WhiteLabel__page-title">
                White Label Exchange Solution
            </div>
            <div className="WhiteLabel__page-description">
                Software solution to run a digital asset exchange or cryptocurrency 
                exchange, with fully-hosted options available. Custom deployments 
                may be launched in 60 days.
            </div>
            <div className="WhiteLabel__page-description">
                Integrate already proven exchange to your core platform 
                and accelerate your GTM strategy.
            </div>
        </div>
    </StyledHeader>
)

export default HeaderSection;