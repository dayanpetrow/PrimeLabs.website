import React from 'react';
import { StyledHeader } from './styledHeaderSection';
import { Navigation, PrimeButton, buttonThemes } from '../../common/'

const HeaderSection = () => (  
    <StyledHeader>
        <Navigation />
        <div className="BlockchainDev__header-content-wrapper">
            <div className="BlockchainDev__page-name">
                Services
            </div>
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
            <div className="BlockchainDev__button">
                <PrimeButton 
                    theme={buttonThemes.blueSolid} 
                    width={"307px"} 
                    onClick={() => { alert('download paper') }}
                >
                    Download paper
                </PrimeButton>
            </div>
        </div>
    </StyledHeader>
)

export default HeaderSection;