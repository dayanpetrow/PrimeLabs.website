import React from 'react';
import { StyledNewsContentWrapper } from './styledNewsPageContent'
import { SectionTitle } from '../../common/'

const NewsPageContent = ({ news, loadMore, newsCount }) => (
    <StyledNewsContentWrapper>
        <SectionTitle shadowText={"Latest news"} mainText={"News"} />
        <div className="News__flex-grid">
            {news.slice(0, newsCount).map((element, index) => {
                return (
                    <div className="News__flex-grid__item" key={index}>
                        <div className="News__flex-grid__item__title">
                            {element.title}
                        </div>
                        <div className="News__flex-grid__item__summary">
                            {element.summary}
                        </div>
                        <div className="News__flex-grid__item__date">
                            {element.date}
                        </div>
                    </div>
                );
            })}
        </div>
        <div className="News__load-button">
            <button onClick={loadMore}>load more</button>
        </div>
    </StyledNewsContentWrapper >
)

export default NewsPageContent;