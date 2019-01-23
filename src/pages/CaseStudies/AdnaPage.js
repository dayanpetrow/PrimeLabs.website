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
import AdnaHeader from '../../images/case_study_pages/ADNA/dna@2x.jpg';
import AdnaCentered from '../../images/case_study_pages/ADNA/adna-2@3x.png';
/* backgrounds */
import SectionBackgroundTrees from '../../images/svgs/section_background_trees.png';
import OvalBackgroundRight from '../../images/svgs/rightOval.svg';

const AdnaPage = () => (
    <React.Fragment>
        <CaseStudyHeader data={HeaderData} />

        <SectionTitle
            marginTop={"70px"} marginBottom={"60px"} shadowText={"Collaboration"} mainText={"Building team"}
        />
        <FluidParagraph>
            A.DNA set specific requirements for the team. In order to create good synergy 
            each team member needed to be familiar with Domain Driven Design and Agile 
            Methodology. Internal trainings were conducted for the whole team to ensure 
            all requirements are met. A dedicated Scrum team of 2 engineers, 1 Product 
            Owner and 1 Engineering Manager was assigned to build the solution and its 
            foundation. The whole team participated in forming the vision of the end 
            product during the development. This was possible due to a constant collaboration, 
            exchange of knowledge and ideas between the main stakeholders and the team.
        </FluidParagraph>

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
            padding={"0px 0px 40px 0px"}
        >
            <div className="SecondBackground" />

            <CenteredImage img={AdnaCentered} maxWidth={"1440px"} alt={"Natural capital investment"} />

            <SectionTitle
                marginTop={"0px"} marginBottom={"60px"} shadowText={"challenge"} mainText={"Solution"}
            />
            <FluidParagraph>
                {`The team designed the A.DNA platform from the ground up considering the most 
                appropriate architecture and technology stack according to the business requirements. 
                Main components of the system are Corporate Owners, Corporate Profiles, Data Room, 
                Approval Trail, Investor Marketplace and Permissions.`}
            </FluidParagraph>
            <FluidParagraph>
                {`A.DNA Admin adds new Partners into the system that have the rights to create 
                Corporate Profiles and assign them to Corporate Owners. Corporate Profile contains 
                the Data, Approval Trail and Data Room. After accepting ownership, Corporate Owners 
                can approve the data and persist the current state of the Profile to an immutable 
                datastore (private Blockchain). All approvals are logged and displayed in Approval Trail.`}
            </FluidParagraph>
            <FluidParagraph>
                {`The Data Room is the place where all corporate documents are stored. It allows management 
                of access rights, keeping historical data and grouping of files. Main categories are Corporate 
                Documents & Information, Financial Information, Taxes & Charges, Customers, Suppliers and 
                Product Information, Stocks & Inventory, Material Contracts, Intellectual Property, Litigation, 
                Employees, Physical Assets, Equipment and IT, Real Estate, Other Assets, Insurance.`}
            </FluidParagraph>
            <FluidParagraph>
                {`Documents are grouped by Folders and Subfolders. Data Room is implemented through a 
                successful Git integration.`}
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
        content: `.NET, ReactJS, Mongo, PostgresSQL, Аzure, Docker, BDD, TypeScript`
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
    headerCover: AdnaHeader,
    title: "A.DNA: Advanced Company DNA",
    withButton: false,
    buttonUrl: "http://google.com",
    buttonText: "View Website",
    descriptions: [
        `A.DNA is a startup and a newly founded company based in Switzerland. 
        A.DNA’s core business model and mission foresees to bring together 
        companies along with their complete financial and asset data, partners 
        such as lawyer, trustees etc. and potential investors. A.DNA’s solution 
        offers a secure contemporary system where companies and their partners 
        can store anonymously their financial KPIs and all interested third 
        parties i.e. future investors looking for interesting companies to 
        invest their resources into.`
    ]
}

export default AdnaPage;