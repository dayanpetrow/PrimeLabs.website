import React from 'react';
import { StyledSectionTitleWrapper } from './styledSectionTitle'
import Zoom from 'react-reveal/Zoom';

/*  
props:
    shadowText: the background title in light gray,
    mainText: the main text in black,
    uppercase: whether the main text should be uppercase or as passed (default is false)
*/

/*  
    #TODO:
    better sizing of the shadow text
*/

export const SectionTitle = ({ 
    shadowText = 'Shadow Text', 
    mainText = 'Main Text', 
    uppercase = false,
    marginTop,
    marginBottom
}) => (
    <Zoom clear>
        <StyledSectionTitleWrapper 
            uppercase={uppercase} 
            marginTop={marginTop}
            marginBottom={marginBottom}
        >
            <div className="SectionTitle__shadow-title">
                {shadowText}
            </div>
            <div className="SectionTitle__main-title">
                {mainText}
            </div>
        </StyledSectionTitleWrapper>
    </Zoom>
)

export default SectionTitle;