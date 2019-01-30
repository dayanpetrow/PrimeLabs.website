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
                    Security Token <br /> Offering
                </div>
            </Fade>
            <Fade bottom duration={1000}>
                <div className="WhiteLabel__page-description">
                    Leverage the STO Platform to raise capital and accelerate 
                    the development of your business.
                </div>
            </Fade>
        </div>
    </StyledHeader>
)

export default HeaderSection;