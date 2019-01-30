import React from 'react';
import { StyledFooter } from './styledFooter'
import Linkedin from '../../../images/svgs/linked-in.svg'
import PrimeHolding from '../../../images/svgs/primeHolding.png'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const Footer = () => (
    <StyledFooter>
        <div className="Footer__content-wrapper">
            <Fade top>
                <div className="Footer__flex-grid">
                    <div className="Footer__copyright">
                        Copyright © 2019 Prime Labs
                    </div>
                    <div className="Footer__flex-grid__icons">
                        <a href="http://google.com">
                            <img src={Linkedin} alt="PrimeLabs on Linkedin" className="Footer__flex-grid__icon" />
                        </a>
                    </div>
                </div>
            </Fade>
            <Zoom clear>
                <div>
                    <hr className="Footer__separator" />
                </div>
            </Zoom>
            <Fade bottom>
                <div className="Footer__PrimeHolding">
                    PrimeLabs is part of 
                    <span>
                        <a href="http://primeholding.com" target="_blank" rel="noopener noreferrer">
                            <img src={PrimeHolding} alt="Prime Holding" />
                        </a>
                    </span>
                </div>
            </Fade>
        </div>
    </StyledFooter>
)

export default Footer;