import React from 'react';
import { SectionTitle } from '../components/common'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - Page not found";

const CaseStudiesPage = () => (
    <div style={{paddingTop: "108px"}}>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <SectionTitle shadowText={"Not found"} mainText={"404"} />
    </div>
)

export default CaseStudiesPage;