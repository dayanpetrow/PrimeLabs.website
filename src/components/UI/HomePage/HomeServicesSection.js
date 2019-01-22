import React from 'react';
import { withRouter } from "react-router";
import { SectionTitle, PrimeButton, buttonThemes } from '../../common/';
import { StyledHomeServicesWrapper } from './styledHomeServicesSection'
import Separator from '../../../images/home_services/separator.svg'
import WhiteLabelImage from '../../../images/home_services/transaction.svg'
import BlockchainDevelopment from '../../../images/home_services/bitcoin.svg'
import ICO from '../../../images/home_services/ico.svg'

/*  
    #TODO:
    third svg icon from the mockups
*/

const HomeServicesSection = (props) => (
    <StyledHomeServicesWrapper>
        <SectionTitle mainText={"Our services"} shadowText={"What we do"} />
        <div className="HomeServices__flex-grid">

            <div className="HomeServices__flex-grid__column" tabIndex="1">
                <div className="HomeServices__image--white-label">
                    <img src={WhiteLabelImage} alt="White-Label Exchange" />
                </div>
                <div className="HomeServices__title-wrapper">
                    <div className="HomeServices__title">
                        White-label Exchange
                    </div>
                </div>
                <div className="HomeServices__separator">
                    <img src={Separator} alt="dasdasd" />
                </div>
                <div className="HomeServices__description-wrapper">
                    <div className="HomeServices__description">
                        Do you have an intention to create your own cryptocurrency 
                        or to implement technology into your business? 
                    </div>
                </div>
                <div className="HomeServices__button-wrapper">
                     <PrimeButton 
                        theme={buttonThemes.blueSolid} 
                        onClick={() => { props.history.push('/services/white-label') }}
                        width={"175px"} 
                    >
                        Learn more
                    </PrimeButton>
                </div>
            </div>

            <div className="HomeServices__flex-grid__column" tabIndex="1">
                <div className="HomeServices__image--blockchain">
                    <img src={BlockchainDevelopment} alt="White-Label Exchange" />
                </div>
                <div className="HomeServices__title-wrapper">
                    <div className="HomeServices__title">
                        Blockchain Development
                    </div>
                </div>
                <div className="HomeServices__separator">
                    <img src={Separator} alt="dasdasd" />
                </div>
                <div className="HomeServices__description-wrapper">
                    <div className="HomeServices__description">
                        Do you have an intention to create your own cryptocurrency 
                        or to implement technology into your business? 
                    </div>
                </div>
                <div className="HomeServices__button-wrapper">
                    <PrimeButton 
                        theme={buttonThemes.blueSolid} 
                        onClick={() => { props.history.push('/services/blockchain-development') }}
                        width={"175px"} 
                    >
                        Learn more
                    </PrimeButton>
                </div>
            </div>

            <div className="HomeServices__flex-grid__column" tabIndex="1">
                <div className="HomeServices__image--ico">
                    <img src={ICO} alt="White-Label Exchange" />
                </div>
                <div className="HomeServices__title-wrapper">
                    <div className="HomeServices__title">
                        Initial Token Offering
                    </div>
                </div>
                <div className="HomeServices__separator">
                    <img src={Separator} alt="dasdasd" />
                </div>
                <div className="HomeServices__description-wrapper">
                    <div className="HomeServices__description">
                        The process from the tokens issue and smart contract 
                        development to the creation of web projects.
                    </div>
                </div>
                <div className="HomeServices__button-wrapper">
                    <PrimeButton 
                        theme={buttonThemes.blueSolid} 
                        onClick={() => { props.history.push('/services/initial-token-offering') }}
                        width={"175px"} 
                    >
                        Learn more
                    </PrimeButton>
                </div>
            </div>

        </div>
    </StyledHomeServicesWrapper>
)

export default withRouter(HomeServicesSection);