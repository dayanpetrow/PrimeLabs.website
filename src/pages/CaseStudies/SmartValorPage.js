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
import SmartValorHeader from '../../images/case_study_pages/SmartValor/bg@3x.png';
import SmartValorScreens from '../../images/case_study_pages/SmartValor/screens@2x.png';
import SmartValorScreensBG from '../../images/case_study_pages/SmartValor/screensBackground@2x.png';
import SmartValorGroupedScreens from '../../images/case_study_pages/SmartValor/groupedScreens@3x.png';
import SmartValorPresales from '../../images/case_study_pages/SmartValor/presales@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';

const SmartValorPage = () => (
    <React.Fragment>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
        />
        <FluidParagraph>
            The Smart Valor Platform enables investors to purchase cryptocurrencies, utility 
            and security tokens in a fully legal and compliant with the Swiss law way. The 
            platform supports two user types - Individual investors and Business investors. 
            Each user type has to comply with different legal requirements, depending on the 
            amount they were willing to invest.
        </FluidParagraph>

        <RightOvalBackground top={"-375px"} >
            <img className="Oval" src={SmartValorScreensBG} alt="Oval Background" />
            <CenteredImage img={SmartValorScreens} maxWidth={"1259px"} alt={"AlgoStore"} />
        </RightOvalBackground>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
        >

            <SectionTitle
                marginTop={"-40px"} marginBottom={"60px"} shadowText={"Challenge"} mainText={"Solution"}
            />
            <FlexImageRight maxWidthImage={"450px"}>
                <div className="CaseStudyFlex__content">
                    <h3 className="CaseStudyFlex__paragraph-header">
                        Onboarding
                    </h3>
                    <p>
                        One of the most important functionalities of the platform is the 
                        user onboarding with flawless KYC and AML processes. Once we created 
                        the platform concepts, workflows and designs, the team started 
                        implementation of the first iteration of the platform. 
                        KYC process guides individual users through submitting a copy of their 
                        identity documents so that they pass a compliant verification. 
                        Businesses, on the other hand, verify their company data by providing 
                        certificate of incorporation.
                    </p>
                    <p>
                        The FINMA Anti-Money Laundering Ordinance sets out the requirements 
                        for the professional practice of financial intermediation and the 
                        due diligence obligations and reporting duties which traders must 
                        fulfil. Individual users provide sources of income and/or wealth. 
                        Businesses provide sources of income and/wealth for their 
                        representatives and controlling employees.
                    </p>
                    <h3 className="CaseStudyFlex__paragraph-header">
                        Pre-sale and payments
                    </h3>
                    <p>
                        The official launch of the platform was the Pre-sale phase where 
                        investors can sign up and buy VALOR tokens at discounted prices.
                    </p>
                    <p>
                        Pre-sales requests were tracked via integration with Salesforce. 
                        All investors automatically receive required legal paperwork 
                        (contracts) that can be signed online via DocuSign integration. 
                        Supported payment methods include both cryptocurrencies (Bitcoin 
                        and Ethereum) as well as conventional FIAT investment (via wire 
                        transfer). All cryptocurrency investments are tracked via 
                        privately deployed BTC and ETH nodes.
                    </p>
                    <p>
                        The whole investment process is fully automated and will be used 
                        as a base for all further fundraising campaigns.
                    </p>
                    <div className="CaseStudyFlex__image--in">
                        <img  src={SmartValorPresales} alt={"Presales"} />    
                    </div>
                </div>
                <div className="CaseStudyFlex__image">
                    <img src={SmartValorGroupedScreens} alt="Aidonic Web Page" />
                    <h3 className="CaseStudyFlex__paragraph-header">
                        Trading and exchange
                    </h3>
                    <p>
                        The next iteration of the platform extended payment methods with 
                        credit card integration and introduced the very important trading 
                        functionality. It enables end-users to buy and sell digital assets 
                        by submitting market and limit orders, while monitoring the order 
                        book and asset price. User wallets were enabled as well enabling 
                        deposit and withdraw of tokens.
                    </p>
                </div>
            </FlexImageRight>

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
        content: "10+ months",
    },
    {
        title: "Technology Stack:",
        content: `Angular 4+, Java 10+, Spring Boot, PostgreSQL, Kubernetes, AWS`
    },
    {
        title: "Domains:",
        content: "Blockchain"
    },
    {
        title: "Team Members:",
        content: `1 Team Lead; 1 Product Owner; 1 UX/UI Designer; 
            4 Back-end Engineers; 3 Front-end Engineers; 3 QAs; 1 DevOps Engineer`
    }
]

const HeaderData = {
    headerCover: SmartValorHeader,
    title: "Disrupting the financial markets, one block at a time",
    titleSize: "571px",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `Smart Valor  aims to be world’s first marketplace for tokenized alternative investments. 
        It provides easy, secure and compliant access to the world of alternative investments, 
        trading with cryptocurrencies, utility and payment tokens.`,
        `Smart Valor has become one of the few blockchain enterprises to gain approval from 
        the Swiss authorities to conduct business on the local financial market. In Liechtenstein 
        the company received the confirmation to operate a fiat and currency exchange.`
    ]
}

export default SmartValorPage;