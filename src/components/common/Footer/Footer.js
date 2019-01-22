import React from 'react';
import { StyledFooter } from './styledFooter'
import Linkedin from '../../../images/svgs/linked-in.svg'
import Telegram from '../../../images/svgs/telegram.svg'


const Footer = () => (
    <StyledFooter>
        <div className="Footer__content-wrapper">
            <div className="Footer__flex-grid">
                <div className="Footer__copyright">
                    Copyright © 2018 Prime Labs
                </div>
                <div className="Footer__flex-grid__icons">
                    <a href="http://google.com">
                        <img src={Linkedin} alt="PrimeLabs on Linkedin" className="Footer__flex-grid__icon" />
                    </a>
                    <a href="http://google.com">
                        <img src={Telegram} alt="PrimeLabs on Telegram" className="Footer__flex-grid__icon" />
                    </a>
                </div>
            </div>
            <hr className="Footer__separator" />
            
        </div>
    </StyledFooter>
)

export default Footer;