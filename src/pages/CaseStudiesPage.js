import React from 'react';
import { Helmet } from "react-helmet";
import CaseStudyGrid from '../components/UI/CaseStudiesPage/'

const PAGE_TITLE = "our work custom title";

const CaseStudiesPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <CaseStudyGrid />
    </div>
)

export default CaseStudiesPage;