import React from 'react';
import {
    CaseStudyHeader,
    CaseStudyFullWidthParagraph as FluidParagraph,
    SectionTitle,
    SectionWithBackground,
    RightOvalBackground,
    CenteredImage,
    CaseStudySummary,
    CaseStudyList
} from '../../components/common';
/* algo images */
import NCInvestmentHeader from '../../images/case_study_pages/NCI/generalblue@2x.jpg';
import NCInvestmentCentered from '../../images/case_study_pages/NCI/nci-mobiles@2x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';

const NCInvestmentPage = () => (
    <React.Fragment>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
        />
        <FluidParagraph>
            Generation Blue enables people to make Net Positive Pledge and to help 
            protect the future via investing in natural capital assets. During the 
            Wonderfruit festival, people will be awarded with TREEs, based on their 
            consumption. In order to receive their gifts, they need to install and 
            register with Generation Blue.
        </FluidParagraph>
        <FluidParagraph>
            The team managed to develop MVP applications for both iOS and Android. 
            Functionality included:
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >
            <CaseStudyList>
                {[
                    `Net Positive Pledge with carbon calculator implicating user’s impact on the environment`,
                    `Referral system enabling every user to provide trackable activation link`,
                    `Sending and receiving TREE token between application users`,
                    `Integration with Twitter mainstream for sharing social impact`,
                    `A pledge screen tracking user goal based on bought or received TREE tokens`,
                    `Ability to exchange TREE tokens against Bitcoin and Ether`
                ].map((item, index) => (
                    <div className="CaseStudyList__item" key={index}>
                        {item}
                    </div>
                ))}
            </CaseStudyList>

            <CenteredImage img={NCInvestmentCentered} maxWidth={"800px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"0px"} marginBottom={"60px"} shadowText={"challenge"} mainText={"Results"}
            />
            <FluidParagraph>
                {`Generation Blue team presented the application to the Wonderfruit festival attendees, 
                received a rich insight of the target auditory interests and decided to dedicate more 
                time on establishing a strong compelling application. Everyone liked the application 
                and various partnerships were created.`}
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
        content: "3 months",
    },
    {
        title: "Technology Stack:",
        content: `Native Android, Swift, .Net`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `1 Product Owner; 1 UX/UI Designer;  3 Software Engineers; 1 QA Engineer; `
    }
]

const HeaderData = {
    headerCover: NCInvestmentHeader,
    title: "Natural capital investment",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `Generation Blue’s mission is to protect global commons by democratizing investment 
        in natural capital. Protect what you love. Have fun. Invest in life.`,
        `Lykke’s Natural Capital Markets Director - Alan Laubsch and his team created a 
        digital token that represents a mangrove tree planted on one square meter into 
        Heyerdahl Climate Park in Myanmar. One mangrove in 20 years sequesters one ton 
        of CO2. An average American needs to plant only about 20 trees a year in order 
        to be net positive.`
    ]
}

export default NCInvestmentPage;