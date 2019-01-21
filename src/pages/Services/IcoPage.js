import React from 'react';
import { Helmet } from "react-helmet";
import HeaderSection from '../../components/UI/IcoPage/HeaderSection'
//import WhiteLabelPageContent from '../../components/UI/WhiteLabelPage/';

const PAGE_TITLE = "team custom title";

const IcoPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <HeaderSection />
    </div>
)

export default IcoPage;