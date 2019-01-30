import React from 'react';
import { Helmet } from "react-helmet";
import {
    StyledContactsPageContentWrapper,
    StyledInput,
    StyledSelect,
    StyledTextArea,
    StyledOption
} from '../components/UI/ContactsPage/styledContactsPageContent';
import ContactsPageImage from '../images/svgs/contacts.svg'
import { SectionTitle, PrimeButton, buttonThemes } from '../components/common/'
import { message } from 'antd';
import axios from 'axios';

const PAGE_TITLE = "PrimeLabs - Contact us";

class ContactsPage extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handlePrimeLabsSolutionChange = this.handlePrimeLabsSolutionChange.bind(this);
        this.handleBudgetChange = this.handleBudgetChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            formData: {
                name: "",
                email: "",
                headquarters: "",
                company: "",
                solution: "",
                budget: "",
                message: "",
            },
            errors: {}
        }
    }

    handleInputChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            formData: {
                ...this.state.formData,
                [name]: value
            }
        })
    }

    handlePrimeLabsSolutionChange(value) {
        this.setState({
            formData: {
                ...this.state.formData,
                solution: value
            }
        })
    }

    handleBudgetChange(value) {
        this.setState({
            formData: {
                ...this.state.formData,
                budget: value
            }
        })
    }

    handleSubmit(e) {
        let isValid = true;
        let { formData } = this.state;
        let errors = {};

        if (formData.name === "") {
            isValid = false;
            errors["name"] = "Name is a required field!";
        }

        if (formData.email === "") {
            isValid = false;
            errors["email"] = "Email is a required field!";
        } else {
            let emailRegex = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
            const isValidEmail = emailRegex.test(formData.email);
            if(!isValidEmail) {
                isValid = false;
                errors["email"] = "Please enter a valid email address!";
            }
        }

        if (formData.company === "") {
            isValid = false;
            errors["company"] = "Company is a required field!";
        }

        if (formData.headquarters === "") {
            isValid = false;
            errors["headquarters"] = "Headquarters is a required field!";
        }

        if (formData.solution === "") {
            isValid = false;
            errors["solution"] = "PrimeLabs Solution is a required field!";
        }

        if (formData.budget === "") {
            isValid = false;
            errors["budget"] = "Project Budget is a required field!";
        }

        if (formData.message === "") {
            isValid = false;
            errors["message"] = "Message is a required field!";
        }

        this.setState((prevState) => { 
            return { 
                ...prevState,
                errors: errors
            }}, 
            () => { 
                if(isValid) {
                    axios.post('http://localhost/mailer.php', formData )
                    .then(function(response) {
                        this.setState({
                            formData: {
                                name: "",
                                email: "",
                                headquarters: "",
                                company: "",
                                solution: "",
                                budget: "",
                                message: "",
                            },
                            errors: {}
                        })
                        console.log(response);
                        message.success('Your message has been sent successfully!');
                    })
                    .catch(function (error) {
                        message.error('Something went wrong!');
                        console.log(error);
                    });
                }
            }
        );
    }

    render() {
        const { errors } = this.state;
        return (
            <div>
                <Helmet>
                    <title>{PAGE_TITLE}</title>
                </Helmet>
                <StyledContactsPageContentWrapper>
                <SectionTitle shadowText={"Contact us"} mainText={"Tell us about your project"} />
                    <div className="ContactsPage__flex">
                        <div className="ContactsPage__flex--left-column">
                            <img src={ContactsPageImage} alt="Contact us" />
                        </div>
                        <div className="ContactsPage__flex--right-column">

                            <StyledInput name="name" placeholder="Full name" 
                                className={errors.name ? "error" : ""} onChange={this.handleInputChange} />
                            {errors.name && 
                                <div className="ContactsPage__error-message">{errors.name}</div>
                            }

                            <StyledInput name="email" placeholder="Email"
                                className={errors.email ? "error" : ""} onChange={this.handleInputChange} />
                            {errors.email && 
                                <div className="ContactsPage__error-message">{errors.email}</div>
                            }

                            <StyledInput name="company" placeholder="Company"
                                className={errors.company ? "error" : ""} onChange={this.handleInputChange} />
                            {errors.company && 
                                <div className="ContactsPage__error-message">{errors.company}</div>
                            }

                            <StyledInput name="headquarters" placeholder="Headquarters country"
                                className={errors.headquarters ? "error" : ""} onChange={this.handleInputChange} />
                            {errors.headquarters && 
                                <div className="ContactsPage__error-message">{errors.headquarters}</div>
                            }

                            <StyledSelect placeholder="PrimeLabs Solution" 
                                className={errors.solution ? "error" : ""} onChange={this.handlePrimeLabsSolutionChange}>
                                <StyledOption value="White Label">White Label Exchange</StyledOption>
                                <StyledOption value="Blockchain">Blockchain Development</StyledOption>
                                <StyledOption value="STO">Security Token Offering</StyledOption>
                            </StyledSelect>
                            {errors.solution && 
                                <div className="ContactsPage__error-message">{errors.solution}</div>
                            }

                            <StyledSelect placeholder="Project Budget"
                                className={errors.budget ? "error" : ""} onChange={this.handleBudgetChange}>
                                <StyledOption value="0-5,000">0-5000</StyledOption>
                                <StyledOption value="5,001-10,000">5001-10,000</StyledOption>
                                <StyledOption value="10,001-20,000">10001-20,000</StyledOption>
                            </StyledSelect>
                            {errors.budget && 
                                <div className="ContactsPage__error-message">{errors.budget}</div>
                            }

                            <StyledTextArea name="message" placeholder="Write your question" 
                                className={errors.message ? "error" : ""} onChange={this.handleInputChange} />
                            {errors.message && 
                                <div className="ContactsPage__error-message">{errors.message}</div>
                            }

                            <div className="ContactsPage__button-container">
                                <PrimeButton
                                    theme={buttonThemes.blueSolid}
                                    onClick={this.handleSubmit}
                                    width={"175px"}
                                >
                                    Submit
                                </PrimeButton>
                            </div>
                        </div>
                    </div>
                </StyledContactsPageContentWrapper>
            </div>
        )
    }
}

export default ContactsPage;