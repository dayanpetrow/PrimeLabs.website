import React from 'react';
import { StyledHomeNewsletterWrapper } from './styledHomeNewsletter';

/*  
    #TODO:
    mobile version
*/

const HomeNewsletter = () => (
    <StyledHomeNewsletterWrapper> 
        <div className="HomeNewsletter__content-wrapper">
            <div className="HomeNewsletter__text">
                Submit your company email address <br />
                to subscribe for our Latest Updates
            </div>
            <div className="HomeNewsletter__input-wrapper">
                <input 
                    className="HomeNewsletter__input" 
                    placeholder="Submit your email address"
                />
                <button 
                    className="Homenewsletter__button" 
                    onClick={() => { alert('work in progress')}}
                    
                >
                    Send
                </button>
            </div>
        </div>
    </StyledHomeNewsletterWrapper>
)

export default HomeNewsletter;