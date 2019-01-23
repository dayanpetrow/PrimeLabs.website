import React from 'react';
import { withRouter } from "react-router";
import { 
    StyledCaseStudyHeader, 
    StyledPositionWrapper,
    StyledHeaderDescriptions
} from './styledCaseStudyHeader';
import { PrimeButton, buttonThemes } from '../../common/'

const CaseStudyHeader = ({ data, history }) => (
    <React.Fragment>
        <StyledCaseStudyHeader headerCover={data.headerCover} headerPosition={data.headerPosition} >
            <div className="Header__content-wrapper" />
            <StyledPositionWrapper>
                <div className="HeaderCS__title-wrapper">
                    <div className="HeaderCS__title">
                        <h1>{data.title}</h1>
                        {data.withButton &&
                            <div className="HeaderCS__button">
                                <PrimeButton 
                                    theme={buttonThemes.blueSolid} 
                                    onClick={() => { history.push(data.buttonUrl) }}
                                    width={"160px"} 
                                    >
                                    {data.buttonText}
                                </PrimeButton>
                            </div>
                        }
                    </div>
                </div>
            </StyledPositionWrapper>
        </StyledCaseStudyHeader>
        <StyledHeaderDescriptions>
            {(data.descriptions).map((paragraph,index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </StyledHeaderDescriptions>
    </React.Fragment>
)

export default withRouter(CaseStudyHeader);