import React from 'react';
import { Navigation } from '../components/common'
import { Helmet } from "react-helmet";
import ContactsPageContent from '../components/UI/ContactsPage/'

const PAGE_TITLE = "contact us custom title";

const ContactsPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <Navigation />
        <ContactsPageContent />
    </div>
)

export default ContactsPage;