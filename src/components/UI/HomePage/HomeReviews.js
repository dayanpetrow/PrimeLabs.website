import React from 'react';
import { StyledHomeReviewsWrapper } from './styledHomeReviews'
import { SectionTitle } from '../../common/';

/*  
    #TODO:
    carousel
*/

const HomeReviews = () => (
    <StyledHomeReviewsWrapper>
        <SectionTitle mainText={"Satisfied Clients"} shadowText={"Reviews"} />
        <div className="placeholder">
            #todo: reviews carousel
        </div>
    </StyledHomeReviewsWrapper>
)

export default HomeReviews;