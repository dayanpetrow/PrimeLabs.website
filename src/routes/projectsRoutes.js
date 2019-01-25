import AlgoStorePage from '../pages/CaseStudies/AlgoStorePage';
import AidonicPage from '../pages/CaseStudies/AidonicPage';
import TokenEstatePage from '../pages/CaseStudies/TokenEstatePage';
import NCInvestmentPage from '../pages/CaseStudies/NCInvestmentPage';
import AdnaPage from '../pages/CaseStudies/AdnaPage';
import CFDPage from '../pages/CaseStudies/CFDPage';
import MyBitPage from '../pages/CaseStudies/MyBitPage';
import ModernMoneyPage from '../pages/CaseStudies/ModernMoneyPage';
import SourcingLiquidityPage from '../pages/CaseStudies/SourcingLiquidityPage';
import RaiffeisenPage from '../pages/CaseStudies/RaiffeisenPage';
import SmartValorPage from '../pages/CaseStudies/SmartValorPage';

export default [
    { path: "/case-studies/nci", page: NCInvestmentPage },
    { path: "/case-studies/token-estate", page: TokenEstatePage },
    { path: "/case-studies/aidonic", page: AidonicPage },
    { path: "/case-studies/dfm", page: SmartValorPage },
    { path: "/case-studies/automated-trading", page: AlgoStorePage },
    { path: "/case-studies/adna", page: AdnaPage },
    { path: "/case-studies/storying-crypto", page: RaiffeisenPage },
    { path: "/case-studies/cfd", page: CFDPage },
    { path: "/case-studies/sourcing-liquidity", page: SourcingLiquidityPage },
    { path: "/case-studies/modern-money", page: ModernMoneyPage },
    { path: "/case-studies/mybit", page: MyBitPage },
]

