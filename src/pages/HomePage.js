import React from 'react';
import { 
    HomeHeader, 
    HomeServicesSection, 
    HomeFAQ, 
    HomeReviews,
    HomePartners
} from '../components/UI/HomePage'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "PrimeLabs - Blockchain development & consulting";

export const HomePage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>

        <HomeHeader />
        <HomeServicesSection />
        <HomeFAQ />
        <HomeReviews />
        <HomePartners />
    </div>
)

export default HomePage;

/* console.log(window.innerWidth, window.innerHeight); */