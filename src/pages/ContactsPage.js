import React from 'react';
import { Helmet } from "react-helmet";
import ContactsPageContent from '../components/UI/ContactsPage/'

const PAGE_TITLE = "PrimeLabs - Contact us";

const ContactsPage = () => (
    <div>
        <Helmet>
            <title>{PAGE_TITLE}</title>
        </Helmet>
        <ContactsPageContent />
    </div>
)

export default ContactsPage;