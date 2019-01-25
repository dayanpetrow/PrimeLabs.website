import React from 'react';
import { StyledNewsContentWrapper } from './styledNewsPageContent'
import { SectionTitle, PrimeButton, buttonThemes } from '../../common/'

const NewsPageContent = ({ news, loadMore, newsCount, disabled }) => (
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
            <PrimeButton 
                theme={buttonThemes.blueSolid} 
                onClick={loadMore} 
                width={"175px"}
                disabled={news.length === newsCount}
                >
                load more
            </PrimeButton>
        </div>
    </StyledNewsContentWrapper >
)

export default NewsPageContent;