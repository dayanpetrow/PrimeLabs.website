import React from 'react';
import { Link } from 'react-router-dom';
import { StyledOurWorkWithScrollWrapper } from './styledOurWorkWithScroll';
import CaseStudies from '../../../constants/caseStudies';
import { SectionTitle } from '../../common/';
import Icon from 'antd/lib/icon';

const OurWorkWithScroll = ({sectionTitle = "Our work"}) => (
    <StyledOurWorkWithScrollWrapper>
        <SectionTitle shadowText={"Case studies"} mainText={sectionTitle} uppercase={false} marginTop={"-100px"} />
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
                                    <Link to={caseStudy.url}>
                                        Read more 
                                        <span><Icon type="caret-right" /></span>
                                    </Link>
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