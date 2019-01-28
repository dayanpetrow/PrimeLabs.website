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
import MMHeader from '../../images/case_study_pages/ModernMoney/mm_header@3x.jpg';
import MMCentered from '../../images/case_study_pages/ModernMoney/mm_image@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - Modern Money";

const ModernMoneyPage = () => (
    <React.Fragment>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
        />
        <FluidParagraph>
            The application development started with a rebranding of an already existing Trading 
            application. The idea was to create a personal finance application that would be 
            compelling for a different audience - the regular people. However, after discussions 
            with the main stakeholders the vision was changed to include a features that would 
            strengthen the proposal such as personal vault with bio- metric authentication and 
            payment integrations.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >

            <CenteredImage img={MMCentered} maxWidth={"1062px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Results"}
            />
            <FluidParagraph>
                After gaining experience in the new technical domain (blockchain and cryptocurrencies) 
                we managed to lead the development of the application. We assisted the core team to 
                create the application leading it from design to execution and now go to market. We 
                also started developing a white-labelling strategy that can potentially bring new 
                partners to the company.
            </FluidParagraph>

            <RightOvalBackground top={"-375px"} >
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
        content: "8 months",
    },
    {
        title: "Technology Stack:",
        content: `Objective-C, Swift, Rx, Xcode, CryptoSwift`
    },
    {
        title: "Domains:",
        content: "Financial Services"
    },
    {
        title: "Team Members:",
        content: `1 UX/UI Designer; 3 Software Engineers; 1 QA Engineer`
    }
]

const HeaderData = {
    headerCover: MMHeader,
    title: "Modern Money",
    withButton: true,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `Modern Money is a personal finance application for ev- eryday use that bridges 
        the gap between fiat currencies and the new popular cryptocurrencies. It gives 
        regular users a glimpse of the new virtual money and how they will be adopted 
        in the next ten years. Real life integration fosters wider adoption via solving 
        everyday scenarios such as using cryptocurrencies for shopping and paying bills.`
    ]
}

export default ModernMoneyPage;