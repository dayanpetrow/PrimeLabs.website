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
import AlgoStoreHeader from '../../images/case_study_pages/AlgoStore/header@3x.jpg';
import AlgoStoreScreens from '../../images/case_study_pages/AlgoStore/screens@2x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - AlgoStore: Automated trading at Speed";

const AlgoStorePage = () => (
    <React.Fragment>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle 
            marginTop={"70px"} marginBottom={"60px"} shadowText={"challenge"} mainText={"Executive Summary"} 
        />
        <FluidParagraph>
            AlgoStore allows users to create their own automated trading strategies, creating 
            unique and effective algorithms using most crypto or forex assets on the market. 
            They can safely test and execute their algorithms on historical data, without any 
            risk of financial loss, evaluating the potential effectiveness of their strategy 
            before deploying it live with real assets.
        </FluidParagraph>
        <FluidParagraph>
            AlgoStore’s beautiful and easy to use interface can be used by any type of trader - 
            from enthusiast to professional, from adventurous gambler to safe playing wiseman. 
            AlgoStore allows users to use their favorite programming language to create the best 
            and most effective trading strategy, then test it carefully and deploy it on a live 
            exchange. The architecture of the system guarantees minimal reaction times and supreme 
            performance due to the physical proximity of the servers and usage of the fastest 
            communication protocols.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
        >

            <SectionTitle 
                marginTop={"70px"} marginBottom={"60px"} shadowText={"Resolution"} mainText={"Challenges"} 
            />
            <FluidParagraph>
                AlgoStore needed to offer a competitive solution on the market of automated trading software. 
                We had to build a system providing faster transactions, high customization and easy to use 
                interface that can be operated by users with wide variety of skills sets and experience. Being 
                a complementary solution of the constantly evolving Lykke trading platform was a challenge and 
                the team needed to be very flexible, adaptive and resourceful to build a stable and reliable system.
            </FluidParagraph>

            <CenteredImage img={AlgoStoreScreens} maxWidth={"608px"} alt={"AlgoStore"} />

            <SectionTitle 
                marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"} 
            />
            <FluidParagraph>
                We have built a complex system providing users with simplified interface for creating 
                and managing algorithms for trading. We use a cloud based distributed microservices 
                architecture with the latest technologies - .NET Core 2.1 for the APIs and modern frontend 
                framework Angular 4/5 for the user interface. Via using High Frequency Transactions per 
                HTTP REST and TCP sockets for service communication and deploying the whole AlgoStore 
                product in the same infrastructure as the Lykke platform we have succeeded to create a 
                very reliable and fast automated trading platform.
            </FluidParagraph>

            <RightOvalBackground>
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
        content: " 12 months",
    },
    {
        title: "Technology Stack:",
        content: `.Net Core 2.1, Microservices architecture, Angular, Microsoft Azure Storage,
        Kubernetes, TeamCity, Git, RabbitMQ, Redis Domain: Fintech, Blockchain`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `1 Team Lead; 1 Product Owner; 1 UX/UI Designer; 
                4 Back-end Engineers; 3 Front-end 
                Engineers; 3 QAs Engineers; 1 Dev Ops Engineer`
    }
]

const HeaderData = {
    headerCover: AlgoStoreHeader,
    title: "AlgoStore: Automated trading at Speed",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `Lykke is building a global marketplace for the free exchange of financial assets. 
        By leveraging the power of emerging technology, Lykke platform eliminates market inefficiencies, 
        promotes equal access from anywhere in the world, and supports the trade of any object of value.`
    ]
}

export default AlgoStorePage;