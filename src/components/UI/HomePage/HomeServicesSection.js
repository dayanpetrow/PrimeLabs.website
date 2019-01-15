import React from 'react';
import SectionTitle from '../../common/SectionTitle';
import { StyledHomeServicesWrapper } from './styledHomeServicesSection'
import Separator from '../../../images/home_services/separator.svg'
import WhiteLabelImage from '../../../images/home_services/transaction.svg'
import BlockchainDevelopment from '../../../images/home_services/bitcoin.svg'

/*  
    #TODO:
    third svg icon from the mockups
*/

const HomeServicesSection = () => (
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
                    <button className="HomeServices__button" onClick={() => { alert('work in progress')}}>Learn more</button>
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
                    <button className="HomeServices__button" onClick={() => { alert('work in progress')}}>Learn more</button>
                </div>
            </div>

            <div className="HomeServices__flex-grid__column" tabIndex="1">
                <div className="HomeServices__image--blockchain">
                    <img src={BlockchainDevelopment} alt="White-Label Exchange" />
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
                    <button className="HomeServices__button" onClick={() => { alert('work in progress')}}>Learn more</button>
                </div>
            </div>

        </div>
    </StyledHomeServicesWrapper>
)

export default HomeServicesSection;