import React from 'react';
import { StyledHeader } from './styledHeaderSection';
import { PrimeButton, buttonThemes } from '../../common/'
import Fade from 'react-reveal/Fade';

const HeaderSection = () => (  
    <StyledHeader>
        <div className="BlockchainDev__header-content-wrapper">
            <Fade top duration={500}>
                <div className="BlockchainDev__page-name">
                    Services
                </div>
            </Fade>
            <Fade big duration={1000}>
                <div className="BlockchainDev__page-title">
                    Blockchain Development
                </div>
                <div className="BlockchainDev__page-description">
                    A blockchain is a tamper-evident, shared digital ledger that 
                    records transactions in a public or private peer-to-peer network.
                    Distributed to all member nodes in the network, the ledger permanently 
                    records, in a sequential chain of cryptographic hash-linked blocks, 
                    the history of asset exchanges that take place between the peers 
                    in the network.
                </div>
            </Fade>
            <Fade bottom duration={500} delay={500}>
                <div className="BlockchainDev__button">
                    <PrimeButton 
                        theme={buttonThemes.blueSolid} 
                        width={"307px"} 
                        onClick={() => { alert('download paper') }}
                    >
                        Download paper
                    </PrimeButton>
                </div>
            </Fade>
        </div>
    </StyledHeader>
)

export default HeaderSection;