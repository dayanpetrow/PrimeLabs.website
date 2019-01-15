import React from 'react';
import { Navigation, SectionTitle } from '../components/common'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "team custom title";

const TeamPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <SectionTitle shadowText={"Meet the team"} mainText={"Team"} />
    </div>
)

export default TeamPage;