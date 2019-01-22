import React from 'react';
import { Helmet } from "react-helmet";
import HeaderSection from '../../components/UI/IcoPage/HeaderSection'
import IcoContent from '../../components/UI/IcoPage/'

const PAGE_TITLE = "team custom title";

const IcoPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <HeaderSection />
        <IcoContent />
    </div>
)

export default IcoPage;