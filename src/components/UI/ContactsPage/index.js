import React from 'react';
import { 
    StyledContactsPageContentWrapper, 
    StyledInput, 
    StyledSelect,
    StyledTextArea,
    StyledOption
} from './styledContactsPageContent';
import ContactsPageImage from '../../../images/svgs/contacts.svg'
import { SectionTitle, PrimeButton, buttonThemes } from '../../common/'


const ContactsPageContent = () => (
    <StyledContactsPageContentWrapper>
        <SectionTitle shadowText={"Contact us"} mainText={"Tell us about your project"} />
        <div className="ContactsPage__flex">
            <div className="ContactsPage__flex--left-column">
                <img src={ContactsPageImage} alt="Contact us" />
            </div>
            <div className="ContactsPage__flex--right-column">
                <StyledInput placeholder="Full name" className="error" />
                <div className="ContactsPage__error-message">This is an error message</div>
                <StyledInput placeholder="Email" />
                <StyledInput placeholder="Company" />
                <StyledInput placeholder="Headquarters country" />
                <StyledSelect placeholder="PrimeLabs Solution" className="error">
                    <StyledOption value="jack">option 1</StyledOption>
                    <StyledOption value="lucy">option 2</StyledOption>
                </StyledSelect>
                <StyledSelect placeholder="Project Budget">
                    <StyledOption value="jack">option 1</StyledOption>
                    <StyledOption value="lucy">option 2</StyledOption>
                </StyledSelect>
                <StyledTextArea placeholder="Write your question" className="error" />
                <div className="ContactsPage__button-container">
                    <PrimeButton 
                        theme={buttonThemes.blueSolid} 
                        onClick={() => { alert('dasdasd')}} 
                        width={"175px"} 
                        >
                        Submit
                    </PrimeButton>
                </div>
            </div>
        </div>
    </StyledContactsPageContentWrapper>
)

export default ContactsPageContent;