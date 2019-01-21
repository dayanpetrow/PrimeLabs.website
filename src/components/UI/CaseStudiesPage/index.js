import React from 'react';
import { StyledCaseStudyGridWrapper } from './styledCaseStudyGrid';
import CaseStudies from '../../../constants/caseStudies';
import { SectionTitle } from '../../common/';
//import ReadMoreArrow from '../../../images/svgs/readmoreArrow.svg';

const CaseStudyGrid = () => (
    <StyledCaseStudyGridWrapper>
        <SectionTitle shadowText={"Case studies"} mainText={"Our work"} uppercase={true} />
        <div className="CaseStudies__flex-grid">
            {
                CaseStudies.map((caseStudy, index) => {
                    return (
                        <div className="CaseStudies__flex-grid__item" key={index}>
                            <div className="CaseStudies__flex-grid__item__image">
                                <img src={caseStudy.img} alt={caseStudy.title} />
                            </div>
                            <div className="CaseStudies__flex-grid__item__title">
                                {caseStudy.title}
                            </div>
                            <div className="CaseStudies__flex-grid__item__more">
                                <a href={caseStudy.url}>
                                    Read more 
                                    {/*<span><img src={ReadMoreArrow} alt="Read more" /></span>*/}
                                    <span>([arrow placeholder])</span>
                                </a>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </StyledCaseStudyGridWrapper>
)

export default CaseStudyGrid;