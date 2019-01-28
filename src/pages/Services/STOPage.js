import React from 'react';
import { Helmet } from "react-helmet";
import HeaderSection from '../../components/UI/STOPage/HeaderSection'
import IcoContent from '../../components/UI/STOPage/'

const PAGE_TITLE = "PrimeLabs - Security Token Offering";

const STOPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <HeaderSection />
        <IcoContent />
    </div>
)

export default STOPage;