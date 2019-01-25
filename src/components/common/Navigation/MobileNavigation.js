import React from 'react';
import { withRouter } from "react-router";
import { StyledMobileNavigation } from './styledMobileNavigation';
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'
import { PrimeButton, buttonThemes } from '../../common/'

const MobileNavigation = (props) => {
    return (
        <StyledMobileNavigation>
            <div id="MobileNavigation" className="MobileNavigation__container">
                <div className="MobileNavigation__header">
                    <div className="MobileNavigation__header__logo">
                        <a href="/"><img src={PrimeLabsLogo} alt="PrimeLabs Logo" /></a>
                    </div>
                    <div className="MobileNavigation__header__close">
                        <button className="closebtn" onClick={props.close}>&times;</button>
                    </div>
                </div>
                <div className="MobileNavigation__links">
                    <a href="/">Home</a>
                    <a href="/">Services</a>
                    <a href="/">Case studies</a>
                    <a href="/">News</a>
                    <a href="/">Team</a>
                    <a href="/">Contact us</a>
                </div>
                <div className="MobileNavigation__talk">
                    <PrimeButton 
                        theme={buttonThemes.navigationButton} 
                        onClick={() => { props.history.push("/ready-to-talk")}}
                        width={"160px"} 
                        >
                        Ready to talk
                    </PrimeButton>
                </div>
            </div>
        </StyledMobileNavigation>
    )
}

export default withRouter(MobileNavigation);