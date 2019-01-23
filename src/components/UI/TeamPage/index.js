import React from 'react';
import {
    StyledTeamPageContentWrapper,
    StyledTeamGrid,
    StyledTeamText
} from './styledTeamPageContent'
import { SectionTitle } from '../../common/'
import { TeamMembers } from './teamMembers'
import Linkedin from '../../../images/svgs/linked-in.svg'

const TeamPageContent = () => (
    <StyledTeamPageContentWrapper>
        <StyledTeamText>
            <SectionTitle shadowText={"Meet the team"} mainText={"Team"} />
            <div className="TeamPage__text-wrapper">
                <p className="TeamPage__paragraph">
                    We are a blockchain development and consulting company 
                    focused on building great products.
                </p>
                <p className="TeamPage__paragraph">
                    We help companies launch new products and services by 
                    providing expertise in Public (Bitcoin, Ethereum) and 
                    Permissioned (IBM Hyperledger) Blockchains, Digital wallets 
                    (BTC, ETH, ERC20), Payment integrations, Smart Contracts 
                    (Solidity) and Distributed Applications (DApps).
                </p>
                <p className="TeamPage__paragraph">
                    Prime Exchange enables companies to deploy a full digital 
                    asset exchange and integrate it into their core platforms. 
                    Customize and launch your own digital currency and exchange 
                    in less than 20 days.
                </p>
            </div>
        </StyledTeamText>
        <StyledTeamGrid>
            {
                TeamMembers.map((member,index) => (
                    <div className="TeamGrid__item" key={index}>
                        <div className="TeamGrid__item__photo-wrapper">
                            <img src={member.image} alt="Default team member" />
                        </div>
                        <div className="TeamGrid__item__name">
                            {member.name}
                        </div>
                        <div className="TeamGrid__item__position">
                            {member.position} 
                            <span>
                                <a href="http://google.com">
                                    <img src={Linkedin} alt="LinkedIn Link" className="TeamGrid__item__Linkedin" />
                                </a>
                            </span>
                        </div>
                        <hr className="TeamGrid__item__separator" />
                        <div className="TeamGrid__item__bio">
                            {member.bio}
                        </div>
                    </div>
                ))
            }
        </StyledTeamGrid>
    </StyledTeamPageContentWrapper>
)

export default TeamPageContent;