import React from 'react'
import AlgoStorePage from '../pages/CaseStudies/AlgoStorePage';
import AidonicPage from '../pages/CaseStudies/AidonicPage';
import TokenEstatePage from '../pages/CaseStudies/TokenEstatePage';
import NCInvestmentPage from '../pages/CaseStudies/NCInvestmentPage';
import AdnaPage from '../pages/CaseStudies/AdnaPage';
import CFDPage from '../pages/CaseStudies/CFDPage';

const WhiteLabelPage = () => (
    <h1>coming soon</h1>
)

export default [
    { path: "/case-studies/nci", page: NCInvestmentPage },
    { path: "/case-studies/token-estate", page: TokenEstatePage },
    { path: "/case-studies/aidonic", page: AidonicPage },
    { path: "/case-studies/dfm", page: WhiteLabelPage },
    { path: "/case-studies/automated-trading", page: AlgoStorePage },
    { path: "/case-studies/adna", page: AdnaPage },
    { path: "/case-studies/storying-crypto", page: WhiteLabelPage },
    { path: "/case-studies/cfd", page: CFDPage },
    { path: "/case-studies/sourcing-liquidity", page: WhiteLabelPage },
    { path: "/case-studies/modern-money", page: WhiteLabelPage },
    { path: "/case-studies/mybit", page: WhiteLabelPage },
]

