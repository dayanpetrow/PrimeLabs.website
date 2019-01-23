import React from 'react';
import { StyledSummaryWrapper } from './styledCaseStudySummary'

const CaseStudySummary = ({ summary }) => (
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
)

export default CaseStudySummary;