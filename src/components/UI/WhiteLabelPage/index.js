import React from 'react';
import { StyledFlexSection, SectionTitle, SectionWithBackground, OurWorkWithScroll } from '../../common';
import { StyledWhiteLabelPageContent, SectionWrapper } from './styledWhiteLabelPageContent';
import ExchangeSolutions from '../../../images/white_label/exchange_solutions.png';
import PrimeWalletBackground from '../../../images/white_label/prime_wallet_bg.png';
import PrimeWalletImage from '../../../images/white_label/prime_wallet_image.png';
import ExchangeOfficeImage from '../../../images/white_label/exchange_office_image.png';
import BenefitsBackground from '../../../images/svgs/rightOval.svg';
import BenefitsImage from '../../../images/svgs/tickCircleIcon.svg';

const WhiteLabelPageContent = () => (
    <StyledWhiteLabelPageContent>
        {/* EXCHANGE SOLUTIONS SECTION */}
        <SectionTitle shadowText="Exchange solutions" mainText="Our work" />
        <ExchangeSolutionsSection />

        {/* PRIME WALLET & EXCHANGE BACK OFFICE */}
        <SectionWithBackground
            background={PrimeWalletBackground}
            backgroundPosition="center top"
        >
            <div className="SecondBackground" />
            <PrimeWalletSection />
            <ExchangeBackOfficeSection />

            {/* BENEFITS */}
            <div className="RightOvalBackground">
                <img className="Oval" src={BenefitsBackground} alt="Oval Background" />
                <SectionTitle shadowText="Exchange solutions" mainText="Benefits" uppercase={true} />
                <BenefitsSection />
                <OurWorkWithScroll />
            </div>
        </SectionWithBackground>
    </StyledWhiteLabelPageContent>
)

const ExchangeSolutionsSection = () => {
    const SectionListContent = [
        "Limit and Market Orders",
        "60+ tokens and cryptocurrencies",
        "Deposits, Withdrawals and Full transaction history",
        "3rd party integrations for payments, settlement, authentication, KYC/AML",
        "Integration with Liquidity Connector"
    ]
    const SectionConfig = {
        leftColumnSize: "513",
        rightColumnSize: "725",
        textSize: "407",
        sectionBottomMargin: "10",
        imageSize: "513",
        imageMarginTop: "40"
    }
    return (
        <SectionWrapper>
            <StyledFlexSection config={SectionConfig}>
                <div className="FlexSection__left-column">
                    <div className="FlexSection__image-wrapper">
                        <img src={ExchangeSolutions} alt="Exchange Solutions" />
                    </div>
                </div>
                <div className="FlexSection__right-column">
                    <div className="FlexSection__text-wrapper">
                        <div className="FlexSection__title">
                            Web terminal
                        </div>
                        <div className="FlexSection__description">
                            A full-featured web application allowing users to trade on the exchange.
                        </div>
                        <div className="FlexSection__list">
                            {SectionListContent.map((listItem, index) => (
                                <div className="FlexSection__list__item" key={index}>
                                    {listItem}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StyledFlexSection>
        </SectionWrapper>
    )
}

const PrimeWalletSection = () => {
    const SectionListContent = [
        "User accounts with extended security (SMS & PIN confirmation)",
        "Private and Trading wallets with support for BTC, ETH, ERC20 tokens",
        "Sending, receiving and trading of assets",
        "KYC Integration with selfie, proof of address and ID",
        "Watchlist and public order book with charts"
    ]
    const SectionConfig = {
        leftColumnSize: "513",
        rightColumnSize: "725",
        textSize: "453",
        sectionBottomMargin: "80",
        imageSize: "520"
    }
    return (
        <SectionWrapper>
            <StyledFlexSection config={SectionConfig}>
                <div className="FlexSection__left-column">
                    <div className="FlexSection__text-wrapper">
                        <div className="FlexSection__title">
                            Prime Wallets
                        </div>
                        <div className="FlexSection__description">
                            Mobile applications for iOS and Android that enable
                            users to store and trade digital assets.
                        </div>
                        <div className="FlexSection__list">
                            {SectionListContent.map((listItem, index) => (
                                <div className="FlexSection__list__item" key={index}>
                                    {listItem}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="FlexSection__right-column">
                    <div className="FlexSection__image-wrapper">
                        <img src={PrimeWalletImage} alt="Prime Wallets" />
                    </div>
                </div>
            </StyledFlexSection>
        </SectionWrapper>
    )
}

const ExchangeBackOfficeSection = () => {
    const SectionListContent = [
        "Protected by Client SSL certificates",
        "Protected by Google Authenticator",
        "Interface to KYC flow for KYC officers (if broker handles KYC in-house)",
        "Integration to Several KYC Provides (Jumio, Onfido)",
        "Interface to dictionary of assets",
        "Interface to dictionary of asset pairs",
        "Interface to FIAT deposit Limits",
        "Interface to Client card (accounts, trades, transactions history)"
    ]
    const SectionConfig = {
        leftColumnSize: "513",
        rightColumnSize: "725",
        textSize: "407",
        sectionBottomMargin: "80",
        imageSize: "513",
        imageMarginTop: "40"
    }
    return (
        <SectionWrapper>
            <StyledFlexSection config={SectionConfig}>
                <div className="FlexSection__left-column">
                    <div className="FlexSection__image-wrapper">
                        <img src={ExchangeOfficeImage} alt="Exchange Solutions" />
                    </div>
                </div>
                <div className="FlexSection__right-column">
                    <div className="FlexSection__text-wrapper">
                        <div className="FlexSection__title">
                            Exchange Back Office
                        </div>
                        <div className="FlexSection__description">
                            Web portal for management of all exchange operations. 
                        </div>
                        <div className="FlexSection__list">
                            {SectionListContent.map((listItem, index) => (
                                <div className="FlexSection__list__item" key={index}>
                                    {listItem}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </StyledFlexSection>
        </SectionWrapper>
    )
}

const BenefitsSection = () => {
    const Benefits = [
        "Fast Go To Market",
        "Production Ready",
        "Continuous Updates",
        "Flexible Integrations",
        "Advanced APIs"
    ]
    return (
        <SectionWrapper paddingTop="30px">
            <div className="Benefits__flex-grid">
                {Benefits.map((item, index) => (
                    <div className="Benefits__flex-grid__item" key={index}>
                        <div className="Benefits__image-wrapper">
                            <img src={BenefitsImage} alt="Benefits" />
                        </div>
                        <div className="Benefits__text-wrapper">
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    )
}

export default WhiteLabelPageContent;

