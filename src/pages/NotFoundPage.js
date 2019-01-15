import React from 'react';
import { Navigation, SectionTitle } from '../components/common'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "not found custom title";

const CaseStudiesPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <SectionTitle shadowText={"Not found"} mainText={"404"} />
    </div>
)

export default CaseStudiesPage;