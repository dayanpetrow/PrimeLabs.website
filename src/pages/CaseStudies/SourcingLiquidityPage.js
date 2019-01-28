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
import SLHeader from '../../images/case_study_pages/SourcingLiquidity/header@3x.png';
import SLScreens from '../../images/case_study_pages/SourcingLiquidity/screens@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - Sourcing liquidity on demand";

const SourcingLiquidityPage = () => (
    <React.Fragment>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"90px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Executive Summary"}
        />
        <FluidParagraph>
            Connector (EC) is Lykke's dedicated service for managing connectivity with other 
            crypto exchanges. EC feeds order books, ticks and order updates from exchanges such 
            as Lykke, Bitfinex, GDAX, Cex.IO and others. The main functionality allows subscribing 
            to orderbook updates, tick updates and order execution events and stores the data 
            locally in Lykke’s database. Along with that, data gets published into an internal 
            Lykke queue, where it is made available to other services, systems and modules. It 
            can be used for real-time and historical data testing, statistics, analysis and for 
            any other liquidity demanding purposes. 
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >

            <SectionTitle
                marginTop={"90px"} marginBottom={"60px"} shadowText={"Resolution"} mainText={"Challenges"}
            />
            <FluidParagraph>
                The Exchange Connector was a single point for connecting to all external exchanges 
                and thus was a potential point of failure that could lead to a lot of data loss. 
                Increased resource usage and slow data processing were also possible. Thus we needed 
                to refactor it and introduce a new design complying with the increasing demands for 
                performance, flexibility, maintainability and availability.
            </FluidParagraph>

            <CenteredImage img={SLScreens} maxWidth={"1062px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"0px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
            />
            <FluidParagraph>
                The proposed solution introduced a microservice architecture and separated each exchange 
                into its own dedicated service. Each service was optimized and dedicated to delivering 
                data from a specific exchange only, hence improving performance, reliability and 
                reducing maintenance efforts in the long run. It also allowed specific modifications 
                where required - e.g. the Bitfinex adapter was configured to support multi-credentials, 
                so that the service can be queried by multiple clients with different credentials. 
                The new Bitfinex service was also extended to support Spot trading along with the 
                Margin trading endpoints. 
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
        content: `.NET`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `2 Software Engineers;`
    }
]

const HeaderData = {
    headerCover: SLHeader,
    headerPosition: 'right top',
    title: "Sourcing liquidity on demand",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `Lykke is building a global marketplace for the free exchange of financial assets. 
        By leveraging the power of emerging technology, Lykke platform eliminates market 
        inefficiencies, promotes equal access from anywhere in the world, and supports 
        the trade of any object of value.`
    ]
}

export default SourcingLiquidityPage;