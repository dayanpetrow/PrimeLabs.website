import React from 'react';
import { StyledHomeFaqWrapper } from './styledHomeFAQ'
import { SectionTitle } from '../../common/';

/*  
    #TODO:
    tabbed accordion
*/

const HomeFAQ = () => (
    <StyledHomeFaqWrapper>
        <SectionTitle mainText={"Frequently Asked Questions"} shadowText={"FAQ"} />
        <div className="HomeFAQ__text">
            Please check our FAQ for the most commonly asked 
            questions and answers. For further questions not 
            listed here or to be added please contact us via 
            email or support sections of this site.
        </div>
        <div className="placeholder">
            #todo: tabbed-accordion
        </div>
    </StyledHomeFaqWrapper>
)

export default HomeFAQ;