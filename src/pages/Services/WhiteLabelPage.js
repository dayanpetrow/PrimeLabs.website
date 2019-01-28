import React from 'react';
import { Helmet } from "react-helmet";
import HeaderSection from '../../components/UI/WhiteLabelPage/HeaderSection'
import WhiteLabelPageContent from '../../components/UI/WhiteLabelPage/';

const PAGE_TITLE = "PrimeLabs - White Label Exchange";

const WhiteLabelPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <HeaderSection />
        <WhiteLabelPageContent />
    </div>
)

export default WhiteLabelPage;