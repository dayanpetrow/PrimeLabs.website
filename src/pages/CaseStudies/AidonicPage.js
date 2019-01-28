import React from 'react';
import {
    CaseStudyHeader,
    CaseStudyFullWidthParagraph as FluidParagraph,
    SectionTitle,
    SectionWithBackground,
    RightOvalBackground,
    CenteredImage,
    CaseStudySummary,
    FlexImageRight
} from '../../components/common';
/* algo images */
import AidonicHeader from '../../images/case_study_pages/AIDONIC/header@3x.jpg';
import AidoinicCentered from '../../images/case_study_pages/AIDONIC/aidonic@3x.png';
import AidoinicSided from '../../images/case_study_pages/AIDONIC/page@2x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - INNO4 GOOD: Transparent Donations";

const AidonicPage = () => (
    <React.Fragment>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Collaboration"} mainText={"Building the team"}
        />
        <FluidParagraph>
            A dedicated team of 2 Designers, 1 Solution Consultant and 1 Project Manager was assigned
            to build the UX/UI MVP foundation of what it will be a very promising platform with a
            humanitarian and honorable goal. The team participated in forming the concept and vision
            of the product coming up with unique and creative value propositions. This was possible
            due to the constant collaboration, exchange of knowledge and ideas between the main
            stakeholder and the team.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
        >

            <CenteredImage img={AidoinicCentered} maxWidth={"1259px"} alt={"AlgoStore"} />

            <SectionTitle
                marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
            />
            <FlexImageRight maxWidthImage={"450px"}>
                <div className="CaseStudyFlex__content">
                    <p>
                        INNO4 GOOD Platform facilitates charity campaigns and enables NGOs to raise
                        funds from donors in a transparent way, displaying the cash-flow in real time
                        until beneficiaries receive the aid. Platform actors are: NGOs - organizations
                        that will use the platform to create funding campaigns, Donors - people that
                        donate to causes in fiat or crypto, Beneficiaries - people that are assigned
                        to a cause and registered to receive aid and Retailers - NGO partners that will
                        provide goods to the beneficiaries in exchange to digital tokens that will be
                        bought back by the NGO. <br />Main platform workflows include:
                    </p>
                    <p>
                        Creating a project cause: Starting point for adding new fundraising campaign
                    </p>
                    <div className="CaseStudyFlex__content-list">
                        {[
                            "NGO creates new project cause",
                            "NGO assigns Retailers that will support the Project Cause",
                            "(offsite) NGO performs Field Assessment for the Project Cause",
                            "NGO publishes the project"
                        ].map((item, index) => (
                            <div className="CaseStudyFlex__content-list-item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p>
                        Donating to a project cause: Simple workflow for collecting money from donors
                    </p>
                    <div className="CaseStudyFlex__content-list">
                        {[
                            "All project causes are listed on the public portal",
                            "Donors can choose a Project Cause and donate via fiat or crypto ",
                            `Refund policy: If Project Target Funding is not met,
                             Donors will be asked to re-allocate their money`
                        ].map((item, index) => (
                            <div className="CaseStudyFlex__content-list-item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p>
                        Allocating raised funds: After project is successfully completed, digital
                        tokens will be allocated to all Project Cause Beneficiaries
                    </p>
                    <div className="CaseStudyFlex__content-list">
                        {[
                            `Allocate small predefined percentage to NGO to cover cost`,
                            `Allocate digital tokens to all beneficiaries`,
                            `Keep Audit Trail for all money transactions`,
                            `Send notifications to Project Donors about activities`
                        ].map((item, index) => (
                            <div className="CaseStudyFlex__content-list-item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p>
                        Utilizing received funds: Once project cause is funded and digital tokens are allocated
                        beneficiaries will be able to spend the funds to a preselected list of Retailers
                    </p>
                    <div className="CaseStudyFlex__content-list">
                        {[
                            `Notify beneficiaries that the project is successfully funded`,
                            `Notify beneficiaries when they have received the digital tokens`,
                            `Display a list of qualified Retailers that accept the digital tokens`,
                            `Enable payment of invoice with the digital tokens`
                        ].map((item, index) => (
                            <div className="CaseStudyFlex__content-list-item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                    <p>
                        Retailers exchanging tokens for fiat: After Retailers have supported the cause and exchanged
                        goods for digital tokens, they need to receive local fiat currency.
                    </p>
                    <div className="CaseStudyFlex__content-list">
                        {[
                            `Retailer requests payment from INNO4 GOOD Platform`,
                            `INNO4 GOOD Platform buys back the digital tokens at a fixed rate`,
                            `NGO wires transfer to the Retailer bank account`
                        ].map((item, index) => (
                            <div className="CaseStudyFlex__content-list-item" key={index}>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
                <div className="CaseStudyFlex__image">
                    <img src={AidoinicSided} alt="Aidonic Web Page" />
                </div>
            </FlexImageRight>

            <RightOvalBackground top={"-375px"} >
                <img className="Oval" src={OvalBackgroundRight} alt="Oval Background" />
                <SectionTitle
                    marginTop={"70px"} marginBottom={"60px"} shadowText={"challenge"} mainText={"Results"}
                />
                <FluidParagraph>
                    {`The team was punctual with the carefully planned step by step approach and deliverables 
                    on time, by conducting a demonstrations in front of the stakeholders on weekly and daily 
                    basis. The beautifully illustrated UI design visualized a specific look & feel of the 
                    platform, where the thorough and creative UX wireframes accurately describe the flow 
                    of each step, in order for a donation to people in need to be realized.`}
                </FluidParagraph>
            </RightOvalBackground>

            <SectionTitle
                marginTop={"70px"} marginBottom={"60px"} shadowText={"SUMMARY"} mainText={"Quick Facts"}
            />
            <CaseStudySummary summary={SummaryData} />

        </SectionWithBackground>


    </React.Fragment>
)

const SummaryData = [
    {
        title: "Project Duration:",
        content: "1 month",
    },
    {
        title: "Technology Stack:",
        content: `Sketch; InVision; Adobe Xd;`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `1 Product Owner; 1 Design Lead; 1 UX Designer; 1 UI Designer`
    }
]

const HeaderData = {
    headerCover: AidonicHeader,
    title: "INNO4 GOOD: Transparent Donations",
    withButton: true,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `AIDONIC transforms traditional aid funding, by creating a token based peer-2-peer 
        ecosystem that securely connects worldwide donations directly to the beneficiaries 
        in need. The blockchain platform ensures traceability and provides 100% transparency, 
        secure funds allocation to those in need and micro-transactions with zero fees.`
    ]
}

export default AidonicPage;