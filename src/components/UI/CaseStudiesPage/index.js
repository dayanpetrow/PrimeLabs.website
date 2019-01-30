import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { StyledCaseStudyGridWrapper, ContentWrapper } from './styledCaseStudyGrid';
import CaseStudies from '../../../constants/caseStudies';
import { SectionTitle, SectionWithBackground, } from '../../common/';
import Icon from 'antd/lib/icon';
import SectionBackgroundTrees from '../../../images/svgs/section_background_trees.png';

const CaseStudyGrid = (props) => {
    const navigate = (url) => {
        props.history.push(url);
    }

    return (
        <ContentWrapper>
            <SectionTitle shadowText={"Case studies"} mainText={"Our work"} uppercase={true} />
            <SectionWithBackground
                background={SectionBackgroundTrees}
                backgroundPosition="center top"
            >
                <StyledCaseStudyGridWrapper>
                        <div className="CaseStudies__flex-grid">
                            {
                                CaseStudies.map((caseStudy, index) => {
                                    return (
                                        <div className="CaseStudies__flex-grid__item" key={index} >
                                            <div className="CaseStudyCard__content-wrapper" onClick={() => navigate(caseStudy.url)} tabIndex={1} >
                                                <div className="CaseStudyCard__image">
                                                    <img src={caseStudy.img} alt={caseStudy.title} />
                                                </div>
                                                <div className="CaseStudyCard__title">
                                                    {caseStudy.title}
                                                </div>
                                                <div className="CaseStudyCard__more">
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
                </StyledCaseStudyGridWrapper>
            </SectionWithBackground>
        </ContentWrapper>
    )
}

export default withRouter(CaseStudyGrid);