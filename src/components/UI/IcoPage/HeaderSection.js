import React from 'react';
import { StyledHeader } from './styledHeaderSection';
import { Navigation } from '../../common/'

const HeaderSection = () => (  
    <StyledHeader>
        <Navigation />
        <div className="WhiteLabel__header-content-wrapper">
            <div className="WhiteLabel__page-name">
                Services
            </div>
            <div className="WhiteLabel__page-title">
                Initial Token <br /> Offering
            </div>
            <div className="WhiteLabel__page-description">
                Leverage the ITO Platform to raise capital and accelerate 
                the development of your business.
            </div>
        </div>
    </StyledHeader>
)

export default HeaderSection;