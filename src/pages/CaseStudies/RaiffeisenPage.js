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
import RaiffeisenPageHeader from '../../images/case_study_pages/Raiffeisen/header@3x.png';
import RaiffeisenPageScreens from '../../images/case_study_pages/Raiffeisen/screens@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';

const RaiffeisenPage = () => (
    <React.Fragment>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"90px"} marginBottom={"60px"} shadowText={"Resolution"} mainText={"Challenges"}
        />

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >

            <FluidParagraph>
                The value proposition of the Kryptowallet is solving a very simple but 
                painful problem to new crypto users - how to securely store digital assets 
                and not lose ability to access them. In order to achieve that RAI Lab 
                decided to offer an Offline Storage that keeps a printed cards with 
                user wallet seed words, stored in military grade protected swiss vaults.
            </FluidParagraph>
            <FluidParagraph>
                The implementation of the project required successful collaboration from 
                4 sides: RAI Lab - vision, Boydak - business execution, Lykke B2B - project 
                monitoring and control, Prime - technical execution.
            </FluidParagraph>
            <FluidParagraph>
                The project had multiple challenges since it was the first partner application 
                to enter production environment. The team had to keep the application up to 
                date with the constant core API changes, cooperate with the core team on 
                technical details and synchronize and adapt to all feedback coming from the 
                business stakeholders.
            </FluidParagraph>

            <CenteredImage img={RaiffeisenPageScreens} maxWidth={"800px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"0px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
            />
            <FluidParagraph>
                The Raiffeisen Kryptowallet has an ambitious target to show how new cutting edge 
                technologies, set on a path to disrupt the traditional banking industry (blockchain 
                applications, cryptocurrencies), and the old proven banking model can co-exist and 
                unite to serve best the end clients.
            </FluidParagraph>
            <FluidParagraph>
                Raiffeisen Kryptowallet is the first fully rebranded and translated white-label 
                application based on Lykke wallet. It enables users to store the most popular 
                cryptocurrencies Bitcoin (BTC) and Ethereum (ETH). For additional security user 
                private keys are backed up on a physical storage in the banks’ vaults for 
                safekeeping. Using an encrypted TCP channel, all seedwords are sent to RAI 
                and printed on physical cards that can be only retrieved via visiting offices 
                of the bank in Zurich.
            </FluidParagraph>
            <FluidParagraph>
                Once onboarded, users have access to a portfolio page that gives them overall 
                information about their balance. They can easily manage both BTC and ETH wallets, 
                transfer and deposit cryptocurrencies, see transaction history and market information 
                about trading fiat/crypto pairs with price movements. 
            </FluidParagraph>
            <FluidParagraph>
                Application settings module allows setting base currency for the portfolio – USD, EUR, 
                CHF. Additional security for signing orders can be enabled with PIN/Touch ID. 
                Notifications on sms and email channels are sent for any activity related with 
                sensitive operations. 
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
        content: "4 months",
    },
    {
        title: "Technology Stack:",
        content: `Swift`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `1 Product Owner;  3 Software Engineers; 1 QA Engineer;`
    }
]

const HeaderData = {
    headerCover: RaiffeisenPageHeader,
    headerPosition: 'right top',
    title: "Creating a secure way for storying crypto",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `RAI Lab is an innovation incubator of Raiffeisen Group that focuses on creativity 
        and consolidation. RAI Lab’s mission is complex, but precise and focused:`,
        [
            `Promote innovation and bring impetus from economic, social and technological 
            developments to the Raiffeisen core business`,
            `Develop new business models by designing, testing and, where necessary, rejecting them`,
            `Serve the sustainable success and future of Raiffeisen`,
            `Inspire with innovation impulses and strengthen the positioning and visibility of 
            Raiffeisen in the market`
        ],
        `The Raiffeisen Group is the leading Swiss retail bank. The third largest bank in the 
        Swiss banking sector with 1.9 million cooperative members and 3.7 million clients.`
    ]
}

export default RaiffeisenPage;