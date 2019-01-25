import React from 'react';
import { withRouter } from "react-router";
import { StyledMobileNavigation } from './styledMobileNavigation';
import PrimeLabsLogo from '../../../images/svgs/PrimeLabsLogo.svg'
import { PrimeButton, buttonThemes } from '../../common/'
import Icon from 'antd/lib/icon';

const MobileNavigation = (props) => {
    const ServicesClickHandler = () => {
        if(document.getElementById("MobileNavigation__services").style.height === "100%") {
            document.getElementById("MobileNavigation__services").style.height = "0px";
        } else {
            document.getElementById("MobileNavigation__services").style.height = "100%";
        }
    }
    const getExpanded = () => {
        return document.getElementById("MobileNavigation__services").style.height === "100%";
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
                    <a href="/">Home</a>
                    <button onClick={ServicesClickHandler}>
                        Services
                    </button>
                    <div id="MobileNavigation__services" className="MobileNavigation__links__services">
                        <a href="/services/white-label">White-label exchange</a>
                        <a href="/services/blockchain-development">Blockchain development</a>
                        <a href="/services/initial-token-offering">Initial token offering</a>
                    </div>
                    <a href="/case-studies">Case studies</a>
                    <a href="/news">News</a>
                    <a href="/team">Team</a>
                    <a href="/contacts">Contact us</a>
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