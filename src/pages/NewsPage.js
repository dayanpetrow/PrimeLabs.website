import React from 'react';
import { Navigation, SectionTitle } from '../components/common'

const NewsPage = () => (
    <div>
        <Navigation />
        <SectionTitle shadowText={"Latest nes"} mainText={"News"} />
    </div>
)

export default NewsPage;