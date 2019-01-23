import React from 'react';
import { Helmet } from "react-helmet";
import NewsPageContent from '../components/UI/NewsPage'
import dummyNews from '../components/UI/NewsPage/dummyNews';

const PAGE_TITLE = "news custom title";

class NewsPage extends React.Component {
    state = {
        newsCount: 4,
        news: []
    }

    componentWillMount() {
        this.setState(() => {
            return { news: [...dummyNews] }
        });
    }

    loadMore = () => {
        this.setState((prevState) => {
            return { newsCount: prevState.newsCount + 4 };
        });
    }

    render() {
        const { news, newsCount } = this.state;
        return (
            <div>
                <Helmet>
                    <title>{PAGE_TITLE}</title>
                </Helmet>
                <NewsPageContent news={news} loadMore={this.loadMore} newsCount={newsCount} />
            </div>
        )
    }
}

export default NewsPage;