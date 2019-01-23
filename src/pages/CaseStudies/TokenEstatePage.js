import React from 'react';
import { 
    CaseStudyHeader,
    CaseStudyFullWidthParagraph as FluidParagraph,
    SectionTitle,
    SectionWithBackground,
    RightOvalBackground,
    CenteredImage,
    CaseStudySummary
} from '../../components/common';
/* algo images */
import TokenEstateHeader from '../../images/case_study_pages/TokenEstate/header@3x.jpg';
import TokenEstateWebsite from '../../images/case_study_pages/TokenEstate/website@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';

const TokenEstate = () => (
    <React.Fragment>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle 
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Collaboration"} mainText={"Building the team"}
        />
        <FluidParagraph>
            Tokenestate.io selected Prime as a trusted collaboration party and a team was assembled 
            to execute the business requirements and vision of the Platform MVP. Two experienced 
            front-end engineers, three top notch UX/UI designers, a Director of Production and a 
            Project Owner have established the foundations of a solid, highly focused dedicated 
            team. It helped the main stakeholders evolve the business idea and clear out any 
            uncertainties along the way. With a positive and proactive approach, the team has 
            contributed to the product vision and all ideas were later implemented into the MVP platform.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
        >
            <div className="SecondBackground" />

            <CenteredImage img={TokenEstateWebsite} maxWidth={"1376px"} alt={"AlgoStore"} />

            <SectionTitle 
                marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"} 
            />
            <FluidParagraph>
                For 2 months the team managed to cover the MVP and bring to production the Marketplace 
                Demo application while using a Mock Up API supported by Apiary. It visualizes the vision 
                of the investment platform and how it can be built to facilitate investing in real estate 
                markets by deploying blockchain-based Real Estate Tokens (RETOs). 
            </FluidParagraph>
            <FluidParagraph>
                All required user flows for investors and wireframes for the platform were created 
                according to the business requirements. The front-end team went an extra mile and collated 
                the data structure, vital for the feed of the API and the project architecture. For 
                effective charting and graphics an integration was created with Google Maps, Highcharts 
                and D3.js. 
            </FluidParagraph>
            <FluidParagraph>
                The team handled creation of interactive dashboard, implementation of dynamic charts, 
                creating the mockup API structure and arranging async interaction with the API, 
                creation of reusable and dynamic components.
            </FluidParagraph>

            <RightOvalBackground top={"-250px"} >
            <img className="Oval" src={OvalBackgroundRight} alt="Oval Background" />
                <SectionTitle 
                    marginTop={"70px"} marginBottom={"60px"} shadowText={"SUMMARY"} mainText={"Quick Facts"} 
                />
                <CaseStudySummary summary={SummaryData} />
            </RightOvalBackground>
        </SectionWithBackground>

    </React.Fragment>
)

const SummaryData = [
    {
        title: "Project Duration:",
        content: "2 months",
    },
    {
        title: "Technology Stack:",
        content: `ReactJS, Google Apps Script, HTML5, CSS3, Redux, React Charts, Redux Thunk,
        Highcharts`
    },
    {
        title: "Domains:",
        content: "Blockchain, Real Estate"
    },
    {
        title: "Team Members:",
        content: `1 Project manager, 1 UX Designer, 1 UI Desginer, 
            2 Software Engineers, 1 QA Engineer`
    }
]

const HeaderData = {
    headerCover: TokenEstateHeader,
    headerPosition: "left bottom",
    title: "Token Estate: Real Estate Investing Platform",
    withButton: true,
    buttonUrl: "http://google.com",
    buttonText: "View Demo",
    descriptions: [
        `Tokenestate.io is a blockchain-powered real estate platform that enables investors 
        to invest in international real estate properties with no bank account, no minimum 
        investment size and benefit from low transaction fees. Tokenestate.io acts as a 
        compliant service for real estate asset managers to access the growing community 
        of crypto investors, and constitute a much needed alternative to raising funds by 
        means of an Initial Public Offering. Investors get easy access to a stable asset 
        class, that previously had high entry barriers and expensive fees.`
    ]
}

export default TokenEstate;