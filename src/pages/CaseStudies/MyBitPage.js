import React from 'react';
import {
    CaseStudyHeader,
    CaseStudyFullWidthParagraph as FluidParagraph,
    SectionTitle,
    SectionWithBackground,
    CenteredImage,
    CaseStudySummary
} from '../../components/common';
/* algo images */
import MyBitHeader from '../../images/case_study_pages/MyBit/header@3x.jpg';
import MyBitCentered from '../../images/case_study_pages/MyBit/mybit@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - Decentralised wealth management SDK";

const MyBitPage = () => (
    <React.Fragment>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
        />
        <FluidParagraph>
            MyBit Network is a business layer on top of the Ethereum Blockchain that 
            provides developers with a low-level entry barrier for developing financial applications. 
        </FluidParagraph>
        <FluidParagraph>
            Part of the developer tools that MyBit provides is the UI Kit that give engineers 
            the power to rapidly build, test and deploy wealth management applications on the 
            Ethereum blockchain as well as funding mechanisms to support and scale disruptive 
            projects.
        </FluidParagraph>
        <FluidParagraph>
            MyBit UI Kit consists of style guides, components and documentation for developers 
            on how to use the kit to build great systems.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >
            <FluidParagraph>
                Part of the assets components are: Card, DeadlineStatus, InvestmentStatus, Title, 
                PortfolioDropdown, PortfolioRevenueItem, PortfolioValueItem, TotalPortfolioRevenue, 
                TotalPortfolioValue.
            </FluidParagraph>
            <FluidParagraph>
                Showcases for all applications built with the MyBitUI library are also displayed 
                including MyBit Go - an IoT Investment Platform and  MyBit Trust - Trust fund for 
                distributing Blockchain assets. 
            </FluidParagraph>
            <FluidParagraph>
                In the coming months more applications will be rolled out using the framework - 
                Blockchain-based wills for distributing assets, Company token and stock option 
                distributions, Decentralised bill-splitting, Crypto airdrops, Decentralized IoT 
                asset exchange, Smart contract-based payroll.
            </FluidParagraph>

            <CenteredImage img={MyBitCentered} maxWidth={"1062px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"0px"} marginBottom={"60px"} shadowText={"SUMMARY"} mainText={"Quick Facts"}
            />
            <CaseStudySummary summary={SummaryData} />

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
        content: `React, Ant Design`
    },
    {
        title: "Domains:",
        content: "Fintech, Blockchain"
    },
    {
        title: "Team Members:",
        content: `3 Software Engineers`
    }
]

const HeaderData = {
    headerCover: MyBitHeader,
    title: "Decentralised wealth management SDK",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `MyBit enables the rapid building, testing, and deployment of wealth management 
        applications on the Ethereum Blockchain. MyBit Network is an out-of-the-box 
        protocol for creating decentralised wealth management applications, such as 
        crowd sales, funds, wills, and trusts.`,
        `To easily interact with the MyBit Network, the MyBit Foundation has built the 
        MyBit Software Development Kit (SDK). Compressed by a set of open-source 
        technologies such as ES6 Web Libraries, Documentation and Getting Started 
        Guides, any developer can start using MyBit tech stack locally.`
    ]
}

export default MyBitPage;