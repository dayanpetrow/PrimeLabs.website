import React from 'react';
import { withRouter } from "react-router";
import { SectionTitle, PrimeButton, buttonThemes } from '../../common/';
import { StyledHomeServicesWrapper } from './styledHomeServicesSection'
import Separator from '../../../images/home_services/separator.svg'
import WhiteLabelImage from '../../../images/home_services/transaction.svg'
import BlockchainDevelopment from '../../../images/home_services/bitcoin.svg'
import ICO from '../../../images/home_services/ico.svg'
import Fade from 'react-reveal/Fade';

const HomeServicesSection = (props) => (
    <StyledHomeServicesWrapper>
        <Fade bottom delay={500}>
            <SectionTitle mainText={"Our Services"} shadowText={"What we do"} />
        </Fade>
        <Fade bottom cascade>
            <div className="HomeServices__flex-grid">

                <div className="HomeServices__flex-grid__column" tabIndex="1" 
                onClick={() => { props.history.push('/services/white-label-exchange') }}>
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
                            onClick={() => { props.history.push('/services/white-label-exchange') }}
                            width={"175px"} 
                        >
                            Learn more
                        </PrimeButton>
                    </div>
                </div>
                

                <div className="HomeServices__flex-grid__column" tabIndex="1"
                    onClick={() => { props.history.push('/services/blockchain-development') }} >
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

                <div className="HomeServices__flex-grid__column" tabIndex="1"
                    onClick={() => { props.history.push('/services/security-token-offering') }} >
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
                            onClick={() => { props.history.push('/services/security-token-offering') }}
                            width={"175px"} 
                        >
                            Learn more
                        </PrimeButton>
                    </div>
                </div>

            </div>
        </Fade>
    </StyledHomeServicesWrapper>
)

export default withRouter(HomeServicesSection);