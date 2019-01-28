import React from 'react';
import { withRouter } from "react-router";
import { StyledMobileNavigation } from './styledMobileNavigation';
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'
import { PrimeButton, buttonThemes } from '../../common/'

const MobileNavigation = (props) => {
    const ServicesClickHandler = () => {
        if(document.getElementById("MobileNavigation__services").style.height === "100%") {
            document.getElementById("MobileNavigation__services").style.height = "0px";
        } else {
            document.getElementById("MobileNavigation__services").style.height = "100%";
        }
    }
    const navMenuOnClickHandler = (url) => {
        props.history.push(url);
        document.getElementById("MobileNavigation").style.height = "0%";
        document.getElementById("MobileNavigation__services").style.height = "0px";
    }

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
                    <button onClick={() => navMenuOnClickHandler("/")}>Home</button>
                    <button onClick={ServicesClickHandler}>
                        Services
                    </button>
                    <div id="MobileNavigation__services" className="MobileNavigation__links__services">
                        <button onClick={() => 
                            navMenuOnClickHandler("/services/white-label-exchange")}>
                            White Label Exchange
                        </button>
                        <button onClick={() => 
                            navMenuOnClickHandler("/services/blockchain-development")}>
                            Blackchain Development
                        </button>
                        <button onClick={() => 
                            navMenuOnClickHandler("/services/security-token-offering")}>
                            Security Token Offering
                        </button>
                    </div>
                    <button onClick={() => navMenuOnClickHandler("/case-studies")}>Case studies</button>
                    <button onClick={() => navMenuOnClickHandler("/news")}>News</button>
                    <button onClick={() => navMenuOnClickHandler("/team")}>Team</button>
                    <button onClick={() => navMenuOnClickHandler("/contacts")}>Contact us</button>
                </div>
                <div className="MobileNavigation__talk">
                    <PrimeButton 
                        theme={buttonThemes.navigationButton} 
                        onClick={() => navMenuOnClickHandler("/ready-to-talk")}
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