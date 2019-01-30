import React from 'react';
import { Helmet } from "react-helmet";
import NewsPageContent from '../components/UI/NewsPage'
import { Loader } from '../components/common';
import config from '../google.config';


const PAGE_TITLE = "PrimeLabs - News";

class NewsPage extends React.Component {
    state = {
        newsCount: 4,
        news: []
    }

    loadMore = () => {
        this.setState((prevState) => {
            return { newsCount: prevState.newsCount + 4 };
        });
    }

    componentDidMount() {
        // 1. Load the JavaScript client library.
        window.gapi.load("client", this.initClient);
    }

    initClient = () => {
        // 2. Initialize the JavaScript client library.
        window.gapi.client
          .init({
            apiKey: config.apiKey,
            // Your API key will be automatically added to the Discovery Document URLs.
            discoveryDocs: config.discoveryDocs
          })
          .then(() => {
          // 3. Initialize and make the API request.
            this.loadData();
        });
      };

     
    loadData = (callback) => {
         
        window.gapi.client.load("sheets", "v4", () => {
                
            window.gapi.client.sheets.spreadsheets.values
            .get({
                spreadsheetId: config.spreadsheetId,
                range: "News!A1:F"
            })
            .then(
                response => {
                const news = response.result.values;
                //const newsCount = news.length;
                console.log(news);
                //console.log(newsCount);
                //this.setState({ news, newsCount });
                this.setState({ news  });
        
                /* set the data where it should be */
                },
                response => {
                    return response.result.error;
                }
            );
        });
    };



     
    render() {
        const { news, newsCount } = this.state;
        if(news.length === 0 ) {
            return (
                <Loader />
            )
        }
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