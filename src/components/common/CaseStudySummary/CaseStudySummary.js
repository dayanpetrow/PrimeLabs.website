import React from 'react';
import { StyledSummaryWrapper } from './styledCaseStudySummary'
import Fade from 'react-reveal/Fade';

const CaseStudySummary = ({ summary }) => (
    <Fade bottom>
        <StyledSummaryWrapper>
            {summary.map((row,index) => (
                <div className="SummaryRow" key={index}>
                    <div className="SummaryRow__title">
                        {row.title}
                    </div>
                    <div className="SummaryRow__content">
                        {row.content}
                    </div>
                </div>
            ))}
        </StyledSummaryWrapper>
    </Fade>
)

export default CaseStudySummary;