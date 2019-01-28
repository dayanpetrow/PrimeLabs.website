import React from 'react';
import {
    StyledFlexSection,
    SectionTitle,
    FullWidthParagraph,
    OurWorkWithScroll,
    SectionWithBackground,
    RightOvalBackground
} from '../../common/';
import { StyledContentWrapper } from './styledContentWrapper';
import PublicBlockhainsImage from '../../../images/blockchain_dev/public_blockchain.png';
import PermissionedBlockhainsImage from '../../../images/blockchain_dev/permissioned_blockchain.png';
import SectionBackgroundTrees from '../../../images/svgs/section_background_trees.png';
import PortfolioImage from '../../../images/blockchain_dev/portfolio.png';
import WalletImage from '../../../images/blockchain_dev/wallet.png';
import OvalBackgroundRight from '../../../images/svgs/rightOval.svg';

const BlockchainDevPageContent = () => (
    <StyledContentWrapper>
        <SectionTitle shadowText={"Blockchain"} mainText={"Platforms"} />
        <PlatformsSection />

        <SectionTitle shadowText={"Types of Blockchains"} mainText={"Public blockchains"} />
        <PublicBlockhains />

        <SectionTitle shadowText={"Types of Blockchains"} mainText={"Permissioned blockchains"} />
        <PermissionedBlockhains />

        {/* section with background */}
        <SectionWithBackground
            background={SectionBackgroundTrees}
            backgroundPosition="center top"
        >
            <SectionTitle shadowText={"ETHEREUM NETWORK"} mainText={"Portfolio"} />

            <PortfolioSection />
            <PrimeWalletSection />

            <RightOvalBackground top={"-600px"}>
                <img className="Oval" src={OvalBackgroundRight} alt="Oval Background" />
                <OurWorkWithScroll sectionTitle={"Our portfolio"} />
            </RightOvalBackground>

        </SectionWithBackground>

    </StyledContentWrapper>
)

const PlatformsSection = () => (
    <div className="SectionWrapper">
        <FullWidthParagraph>
            {`In the traditional equity markets, a central authority primarily 
            controls the network. These enterprises are now the most profitable. 
            Rather than an ecosystem or network benefiting, the windfall is to 
            the central provider. This model can be viewed as closed, but
            meritocratic. Entrepreneurship into these critical enterprises 
            face higher barriers to entry, due to closed networks and high 
            cash burn against growing R&D budgets of incumbents.`}
        </FullWidthParagraph>
        <FullWidthParagraph>
            In the decentralized era, using Blockchain technology, networks are
            turned into open and meritocratic markets. Bitcoin was the first
            Blockchain, with the primary use case being peerto-peer transport
            of digital currency. This represented the proof of concept. Under
            Blockchain technology, centralized proprietary services are being
            replaced with distributed and decentralized open ones; trusted
            entities replaced with verifiable computation; brittle location
            addresses replaced with resilient content addresses; inefficient
            monolithic services replaced with peer-to-peer algorithmic markets.
        </FullWidthParagraph>
    </div>
)

const PublicBlockhains = () => (
    <div className="SectionWrapper">
        <div className="SectionWrapper__image">
            <img src={PublicBlockhainsImage} alt="Public Blockchains" className="SectionWrapper__image--public" />
        </div>
        <FullWidthParagraph>
            {`The sole distinction between public and private blockchain is related 
            to who is allowed to participate in the network, execute the consensus 
            protocol and maintain the shared ledger. A public blockchain network is 
            completely open and anyone can join and participate in the network. The 
            network typically has an incentivizing mechanism to encourage more 
            participants to join the network. Bitcoin is one of the largest public 
            blockchain networks in production today.`}
        </FullWidthParagraph>
        <FullWidthParagraph>
            {`One of the drawbacks of a public blockchain is the substantial amount 
            of computational power that is necessary to maintain a distributed ledger 
            at a large scale. More specifically, to achieve consensus, each node in 
            a network must solve a complex, resource-intensive cryptographic problem 
            called a proof of work to ensure all are in sync. Another disadvantage is 
            the openness of public blockchain, which implies little to no privacy for
            transactions and only supports a weak notion of security. Both of these 
            are important considerations for enterprise use cases of blockchain.`}
        </FullWidthParagraph>
    </div>
)

const PermissionedBlockhains = () => (
    <div className="SectionWrapper">
        <div className="SectionWrapper__image">
            <img src={PermissionedBlockhainsImage} alt="Public Blockchains" className="SectionWrapper__image--permissioned" />
        </div>
        <FullWidthParagraph>
            {`A private blockchain network requires an invitation and must 
            be validated by either the network starter or by a set of rules 
            put in place by the network starter. Businesses who set up a 
            private blockchain, will generally set up a permissioned network. 
            This places restrictions on who is allowed to participate in the 
            network, and only in certain transactions. Participants need to
            obtain an invitation or permission to join.`}
        </FullWidthParagraph>
        <FullWidthParagraph>
            {`The access control mechanism could vary: existing participants 
            could decide future entrants; a regulatory authority could issue 
            licenses for participation; or a consortium could make the 
            decisions instead. Once an entity has joined the network, it 
            will play a role in maintaining the blockchain in a 
            decentralized manner.`}
        </FullWidthParagraph>
        <FullWidthParagraph>
            {`This type of permissioned blockchain model offers the 
            ability to leverage more than 30 years of technical 
            literature to realize significant benefits. Only the 
            entities participating in a particular transaction will 
            have knowledge and access to it — other entities will
            have no access to it. Permissioned blockchains also
            permit a couple of orders of magnitude greater 
            scalability in terms of transactional throughput.`}
        </FullWidthParagraph>
    </div>
)

const PortfolioSection = () => {
    const SectionConfig = {
        padding: "50px 0px",
        leftColumnSize: "650",
        rightColumnSize: "588",
        textSize: "453",
        sectionBottomMargin: "10",
        imageSize: "650",
        imageMarginTop: "40"
    }
    return (
        <React.Fragment>
            <StyledFlexSection config={SectionConfig}>
                <div className="FlexSection__left-column">
                    <div className="FlexSection__image-wrapper">
                        <img src={PortfolioImage} alt="Exchange Solutions" />
                    </div>
                </div>
                <div className="FlexSection__right-column">
                    <div className="FlexSection__text-wrapper">
                        <div className="FlexSection__title">
                            Private Investment Platform
                        </div>
                        <div className="FlexSection__description">
                            {`A fully-functional DApp (Decentralized Blockchain Application) 
                            that utilizes Ethereum Smart Contracts to allow common folks to 
                            become investors and level grounds with the big whales
                            participating side by side in early deals.`}
                        </div>
                        <div className="FlexSection__description">
                            {`Olympus gives the power to groups of people to join 
                            forces together and participate in private sales or 
                            pre-sales events which usually require a minimum 
                            investment of 250 000 USD or more.`}
                        </div>
                    </div>
                </div>
            </StyledFlexSection>
        </React.Fragment>
    )
}

const PrimeWalletSection = () => {
    const SectionListContent = [
        "Portfolio - list of wallets (balance, recent transactions)",
        "Import or create a wallet",
        "Send and receive transactions",
        "Transaction history",
        "Change network (main, testnet)"
    ]
    const SectionConfig = {
        padding: "50px 0px",
        leftColumnSize: "513",
        rightColumnSize: "725",
        textSize: "453",
        sectionBottomMargin: "80",
        imageSize: "520"
    }
    return (
        <React.Fragment>
            <StyledFlexSection config={SectionConfig}>
                <div className="FlexSection__left-column">
                    <div className="FlexSection__text-wrapper">
                        <div className="FlexSection__title">
                            Ethereum Wallet
                        </div>
                        <div className="FlexSection__description">
                            Prime Wallet is a fully-fledged secure mobile Ethereum Wallet
                            that works directly on the Ethereum network without any intermediaries.
                            With Prime Wallet you have complete control over your private
                            keys that are only stored on your device.
                        </div>
                        <div className="FlexSection__description">
                            Current functionality:
                        </div>
                        <div className="FlexSection__list">
                            {SectionListContent.map((listItem, index) => (
                                <div className="FlexSection__list__item" key={index}>
                                    {listItem}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="FlexSection__right-column">
                    <div className="FlexSection__image-wrapper">
                        <img src={WalletImage} alt="Prime Wallets" />
                    </div>
                </div>
            </StyledFlexSection>
        </React.Fragment>
    )
}

export default BlockchainDevPageContent;