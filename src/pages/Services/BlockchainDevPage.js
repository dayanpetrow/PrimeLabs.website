import React from 'react';
import { Helmet } from "react-helmet";
import HeaderSection from '../../components/UI/BlockchainDevPage/HeaderSection';
import BlockchainDevPageContent from '../../components/UI/BlockchainDevPage/';

const PAGE_TITLE = "PrimeLabs - Blockchain Development";

const BlockchainDevPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <HeaderSection />
        <BlockchainDevPageContent />
    </div>
)

export default BlockchainDevPage;