import React from 'react';
import { Helmet } from "react-helmet";
import TeamPageContent from '../components/UI/TeamPage'

const PAGE_TITLE = "team custom title";

const TeamPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <TeamPageContent />
    </div>
)

export default TeamPage;