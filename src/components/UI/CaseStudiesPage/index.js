import React from 'react';
import { StyledCaseStudyGridWrapper } from './styledCaseStudyGrid';
import CaseStudies from '../../../constants/caseStudies';
import { SectionTitle } from '../../common/';
import ReadMoreArrow from '../../../images/svgs/readmoreArrow.png';

const CaseStudyGrid = () => (
    <StyledCaseStudyGridWrapper>
        <SectionTitle shadowText={"Case studies"} mainText={"Our work"} uppercase={true} />
        <div className="CaseStudies__flex-grid">
            {
                CaseStudies.map((caseStudy, index) => {
                    return (
                        <div className="CaseStudies__flex-grid__item" key={index}>
                            <div className="CaseStudyCard__content-wrapper">
                                <div className="CaseStudyCard__image">
                                    <img src={caseStudy.img} alt={caseStudy.title} />
                                </div>
                                <div className="CaseStudyCard__title">
                                    {caseStudy.title}
                                </div>
                                <div className="CaseStudyCard__more">
                                    <a href={caseStudy.url}>
                                        Read more 
                                        <span><img src={ReadMoreArrow} alt="Read more" /></span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </StyledCaseStudyGridWrapper>
)

export default CaseStudyGrid;