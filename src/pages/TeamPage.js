import React from 'react';
import { Navigation } from '../components/common'
import { Helmet } from "react-helmet";
import TeamPageContent from '../components/UI/TeamPage'

const PAGE_TITLE = "team custom title";

const TeamPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <TeamPageContent />
    </div>
)

export default TeamPage;