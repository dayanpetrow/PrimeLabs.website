import React from 'react';
import { Navigation, SectionTitle } from '../components/common'
import { Helmet } from "react-helmet";

const PAGE_TITLE = "contact us custom title";

const ContactsPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <SectionTitle shadowText={"Contact us"} mainText={"Tell us about your project"} />
    </div>
)

export default ContactsPage;