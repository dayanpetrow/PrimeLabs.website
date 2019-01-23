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
import CFDHeader from '../../images/case_study_pages/CFD/header@3x.png';
import CFDCentered from '../../images/case_study_pages/CFD/cfd_content@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';

const CFDPage = () => (
    <React.Fragment>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Resolution"} mainText={"Challenges"}
        />
        <FluidParagraph>
            The SNOW platform is emulating an existing system of the end customer. It should 
            provide more flexibility, with better user interface and performance. The platform 
            must be secured to the highest bank standards and needs to provide the users the 
            opportunity to make real time trades with multiple assets.
        </FluidParagraph>
        <FluidParagraph>
            The team has to be very flexible, adaptive and resourceful to build a 
            stable and reliable platform.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >
            <div className="SecondBackground" />

            <CenteredImage img={CFDCentered} maxWidth={"1440px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"0px"} marginBottom={"60px"} shadowText={"challenge"} mainText={"Solution"}
            />
            <FluidParagraph>
                {`We have built a complex system providing users with simplified interface 
                for creating and managing their positions, orders and cash transactions. 
                Some of services that are implemented communicate directly with the bank 
                custom services using a socket communication. We use a cloud based distributed 
                microservices architecture with the latest technologies - .NET Core 2.1 for the 
                APIs and modern frontend framework Angular 4/5 for the user interface.`}
            </FluidParagraph>
            <FluidParagraph>
                {`Using a High Frequency Transactions per HTTP REST and TCP sockets for service 
                communication and deploying the whole Snow product in the same infrastructure 
                as Lykke platform we have succeeded to create a very reliable and fast 
                automated trading platform.`}
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
        content: "2 years",
    },
    {
        title: "Technology Stack:",
        content: `.Net Core 2.1, Microservices architecture, Angular, Microsoft Azure Storage,
        Kubernetes, TeamCity, Git, RabbitMQ, Redis, MS SQL Server, ASP.NET Core SignalR,
         ASP.NET Core Identity, MassTransit`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `1 Team Lead;  6 Software Engineers; 3 QA Engineer; `
    }
]

const HeaderData = {
    headerCover: CFDHeader,
    title: "CFD Trading Platform",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `Lykke is building a global marketplace for the free exchange of financial assets. 
        By leveraging the power of emerging technology, Lykke platform eliminates market 
        inefficiencies, promotes equal access from anywhere in the world, and supports the 
        trade of any object of value. Algo Store boosts the power of the Lykke platform by 
        adding automated trading capabilities to the infrastructure leveraging high-speed 
        and high-security levels.`
    ]
}

export default CFDPage;