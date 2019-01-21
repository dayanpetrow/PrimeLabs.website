import React from 'react';
import { StyledOurWorkWithScrollWrapper } from './styledOurWorkWithScroll';
import CaseStudies from '../../../constants/caseStudies';
import { SectionTitle } from '../../common/';
//import ReadMoreArrow from '../../../images/svgs/readmoreArrow.svg';

const OurWorkWithScroll = () => (
    <StyledOurWorkWithScrollWrapper>
        <SectionTitle shadowText={"Case studies"} mainText={"Our work"} uppercase={true} />
        <div className="OurWorkWithScroll">
            {
                CaseStudies.map((caseStudy, index) => {
                    return (
                        <div className="OurWorkWithScroll__column" key={index}>
                            <div className="OurWorkWithScroll__item-wrapper">
                                <div className="OurWorkWithScroll__item__image">
                                    <img src={caseStudy.img} alt={caseStudy.title} />
                                </div>
                                <div className="OurWorkWithScroll__item__title">
                                    {caseStudy.title}
                                </div>
                                <div className="OurWorkWithScroll__item__more">
                                    <a href={caseStudy.url}>
                                        Read more 
                                        {/*<span><img src={ReadMoreArrow} alt="Read more" /></span>*/}
                                        <span>([arrow placeholder])</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    </StyledOurWorkWithScrollWrapper>
)

export default OurWorkWithScroll;