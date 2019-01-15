import React from 'react';
import { Navigation, SectionTitle } from '../components/common'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "news custom title";

const NewsPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <SectionTitle shadowText={"Latest nes"} mainText={"News"} />
    </div>
)

export default NewsPage;