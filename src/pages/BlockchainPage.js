import React from 'react';
import { Navigation, SectionTitle } from '../components/common'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "blockchain custom title";

const BlockchainPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <SectionTitle shadowText={"blockhain header"} mainText={"blockchain"} />
    </div>
)

export default BlockchainPage;