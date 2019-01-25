import React from 'react';
import { StyledContentWrapper, HowItWorksCardWrapper } from './styledContentWrapper';
import { SectionTitle } from '../../common';
import HowItWorksGraphic from '../../../images/ico/howItWorksGraphic.svg';
import BenefitsImage from '../../../images/svgs/tickCircleIcon.svg';

const IcoContent = () => (
    <StyledContentWrapper>
        <SectionTitle shadowText={"Initial token offering"} mainText={"How it works"} />
        <HowItWorksSection />

        <SectionTitle shadowText={"Initial token offering"} mainText={"Benefits"} />
        <BenefitsSection />
    </StyledContentWrapper>
)

const HowItWorksSection = () => (
    <React.Fragment>
        <div className="TokenPage__HowItWorks--with-image">
            <div className="HowItWorks__flex-grid">
                <div className="HowItWorks__flex-grid--left">
                    <HowItWorksCard data={Cards[0]} align={"left"} />
                    <HowItWorksCard data={Cards[4]} align={"left"} paddingTop={"50px"} />
                </div>
                <div className="HowItWorks__flex-grid--middle">
                    <img src={HowItWorksGraphic} alt="How it works" />
                </div>
                <div className="HowItWorks__flex-grid--right">
                    <HowItWorksCard data={Cards[1]} align={"right"}/>
                    <HowItWorksCard data={Cards[2]} align={"right"} paddingTop={"50px"}/>
                </div>
            </div>
            <div className="HowItWorks__bottom-card">
                <HowItWorksCard data={Cards[3]} align={"center"}/>
            </div>
        </div>
        <div className="TokenPage__HowItWorks--no-image">
            <HowItWorksCard data={CardsMobile[0]} align={"center"} />
            <HowItWorksCard data={CardsMobile[1]} align={"center"}/>
            <HowItWorksCard data={CardsMobile[2]} align={"center"} />
            <HowItWorksCard data={CardsMobile[3]} align={"center"}/>
            <HowItWorksCard data={CardsMobile[4]} align={"center"} />
        </div>
    </React.Fragment>
)

const Cards = [
    {
        number: "01",
        title: "Multiple donation addresses",
        content: `Multiple donation addresses are generated by the ICO company 
            and imported in the platform via API (public addresses are then distributed to campaign
                 participants), ICO company maintains access to private keys of the addresses`,
        color: "#f77da3",
        textWidth: "330px"
    },
    {
        number: "02",
        title: "Token distribution",
        content: `SmartContract for the campaign is deployed with default configuration. 
        Token distribution is triggered after campaign end.`,
        color: "#72b0fe",
        textWidth: "330px"
    },
    {
        number: "03",
        title: "ITO Configuration",
        content: `Administration portal is used to configure the campaign: donation tiers, dates, etc.`,
        color: "#2281e9",
        textWidth: "247px"
    },
    {
        number: "04",
        title: "Investor Portal",
        content: `Web portal is used to provide investors the ability to participate in the ICO`,
        color: "#f77da3",
        textWidth: "247px"
    },
    {
        number: "05",
        title: "Analytics",
        content: `Administration Analytics is used to track ICO statistics`,
        color: "#fd8880",
        textWidth: "330px"
    }
]

const CardsMobile = [
    {
        number: "01",
        title: "Multiple donation addresses",
        content: `Multiple donation addresses are generated by the ICO company 
            and imported in the platform via API (public addresses are then distributed to campaign
                 participants), ICO company maintains access to private keys of the addresses`,
        color: "#f77da3",
        textWidth: "300px"
    },
    {
        number: "02",
        title: "Token distribution",
        content: `SmartContract for the campaign is deployed with default configuration. 
        Token distribution is triggered after campaign end.`,
        color: "#72b0fe",
        textWidth: "300px"
    },
    {
        number: "03",
        title: "ITO Configuration",
        content: `Administration portal is used to configure the campaign: donation tiers, dates, etc.`,
        color: "#2281e9",
        textWidth: "300px"
    },
    {
        number: "04",
        title: "Investor Portal",
        content: `Web portal is used to provide investors the ability to participate in the ICO`,
        color: "#f77da3",
        textWidth: "300px"
    },
    {
        number: "05",
        title: "Analytics",
        content: `Administration Analytics is used to track ICO statistics`,
        color: "#fd8880",
        textWidth: "300px"
    }
]

const HowItWorksCard = ({data, align, paddingTop}) => (
    <HowItWorksCardWrapper 
        align={align} 
        numberColor={data.color} 
        textWidth={data.textWidth} 
        paddingTop={paddingTop}
    >
        <div className="HowItWorksCard__number">{data.number}</div>
        <div className="HowItWorksCard__title">{data.title}</div>
        <div className="HowItWorksCard__content">{data.content}</div>
    </HowItWorksCardWrapper>
) 

const BenefitsSection = () => {
    const Benefits = [
        "Full tech support for the ICO",
        "Collection of BTC and ETH",
        "Administration portal with Analytics",
        "Web portal for investors",
    ]
    return (
        <div style={{paddingTop: "30px" }}>
            <div className="TokenPage__benefits">
                {Benefits.map((item, index) => (
                    <div className="TokenPage__benefits__item" key={index}>
                        <div className="TokenPage__benefits__image-wrapper">
                            <img src={BenefitsImage} alt="Benefits" />
                        </div>
                        <div className="TokenPage__benefits__text-wrapper">
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IcoContent;