import React from 'react';
import { StyledNewsContentWrapper, NoNews } from './styledNewsPageContent'
import { SectionTitle, PrimeButton, buttonThemes } from '../../common/'
import Fade from 'react-reveal/Fade';

const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const NewsPageContent = ({ news, loadMore, newsCount }) => (
    <React.Fragment>
        {news.length === 0 && (
            <NoNews>
                <h1>We do not have any news yet!</h1>
            </NoNews>
        )}
        {news.length > 0 && (
            <StyledNewsContentWrapper>
                <Fade bottom duration={1000}>
                    <SectionTitle shadowText={"Latest news"} mainText={"News"} />
                </Fade>
                <div className="News__flex-grid">
                    {news.slice(0, newsCount).map((element, index) => {
                        let summary = element[1];
                        if(summary.length > 300) {
                            /* limits the summary to the last white space before 300 characters */
                            summary = summary.slice(0,300).split(" ");
                            summary.pop();
                            summary = summary.join(" ") + "...";
                        }
                        return (
                            <a href={element[3]} target="_blank" key={index} rel="noopener noreferrer">
                                <Fade big duration={500}>
                                    <div className="News__flex-grid__item">
                                        <div className="News__flex-grid__item__title">
                                            {element[0]}
                                        </div>
                                        <div className="News__flex-grid__item__summary">
                                            {summary}
                                        </div>
                                        <div className="News__flex-grid__item__date">
                                            {element[2].toLocaleDateString('en-US', dateOptions)}
                                        </div>
                                    </div>
                                </Fade>
                            </a>
                        );
                    })}
                </div>
                <Fade bottom duration={1000}>
                    <div className="News__load-button">
                        <PrimeButton 
                            theme={buttonThemes.blueSolid} 
                            onClick={loadMore} 
                            width={"175px"}
                            disabled={news.length <= newsCount}
                            >
                            load more
                        </PrimeButton>
                    </div>
                </Fade>
            </StyledNewsContentWrapper>
        )}
    </React.Fragment>
)

export default NewsPageContent;