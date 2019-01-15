import React from 'react';
import { 
    HomeHeader, 
    HomeServicesSection, 
    HomeNewsletter, 
    HomeFAQ, 
    HomeReviews,
    HomePartners
} from '../components/UI/HomePage'

export const HomePage = () => (
    <div>
        <HomeHeader />
        <HomeServicesSection />
        <HomeNewsletter />
        <HomeFAQ />
        <HomeReviews />
        <HomePartners />
    </div>
)

export default HomePage;