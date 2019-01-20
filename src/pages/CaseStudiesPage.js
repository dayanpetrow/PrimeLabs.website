import React from 'react';
import { Navigation } from '../components/common'
import { Helmet } from "react-helmet";
import CaseStudyGrid from '../components/UI/CaseStudiesPage/'

const PAGE_TITLE = "our work custom title";

const CaseStudiesPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <CaseStudyGrid />
    </div>
)

export default CaseStudiesPage;