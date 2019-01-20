import React from 'react';
import { Link } from "react-router-dom";
import { StyledFooter } from './styledFooter'
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'
import Linkedin from '../../../images/svgs/linked-in.svg'
import Telegram from '../../../images/svgs/telegram.svg'
import ScrollUp from '../../../images/svgs/scrollup.svg'


const Footer = () => (
    <StyledFooter>
        <div className="Footer__content-wrapper">
            <div className="Footer__flex-grid">
                <div className="Footer__flex-grid__logo">
                    <img src={PrimeLabsLogo} alt="PrimeLabs Logo" />
                </div>
                <div className="Footer__flex-grid__navigation">
                    <ul className="Footer__navigation-list">
                        <li className="Footer__navigation-list-item">
                            <Link to={`/`}>Home</Link>
                        </li>
                        <li className="Footer__navigation-list-item">
                            <Link to={`/services`}>Services</Link>
                        </li>
                        <li className="Footer__navigation-list-item">
                            <Link to={`/case-studies`}>Case Studies</Link>
                        </li>
                        <li className="Footer__navigation-list-item">
                            <Link to={`/blockchain`}>Blockchain Infrastructure</Link>
                        </li>
                        <li className="Footer__navigation-list-item">
                            <Link to={`/news`}>News</Link>
                        </li>
                        <li className="Footer__navigation-list-item">
                            <Link to={`/team`}>Team</Link>
                        </li>
                    </ul>
                </div>
                <div className="Footer__flex-grid__icons">
                    <a href="http://google.com">
                        <img src={Linkedin} alt="PrimeLabs Logo" className="Footer__flex-grid__icons--small" />
                    </a>
                    <img src={Telegram} alt="PrimeLabs Logo" className="Footer__flex-grid__icons--small" />
                    <img src={ScrollUp} alt="PrimeLabs Logo" className="Footer__flex-grid__icons--scrollup" />
                </div>
            </div>
            <hr className="Footer__separator" />
            <div className="Footer__copyright">
                Copyright © 2018 Prime Labs
            </div>
        </div>
    </StyledFooter>
)

export default Footer;