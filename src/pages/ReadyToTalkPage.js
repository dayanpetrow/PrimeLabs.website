import React from 'react';
import { Helmet } from "react-helmet";
import { Loader } from '../components/common';

const PAGE_TITLE = "PrimeLabs - Ready To Talk";

class ReadyToTalkPage extends React.Component {

    state = {
        loading: true
    }

    componentWillMount() {
        var script = document.createElement('script'); 
        script.src = "https://paperform.co/__embed"; 
        script.id = "ReadyToTalkScript";
        document.body.appendChild(script);
        setTimeout(() => {
            this.setState({ loading: false });
        }, 500);
    }

    componentWillUnmount() {
        let element = document.getElementById('ReadyToTalkScript');
        element.parentNode.removeChild(element);
    }

    render() {
        return (
            <div>
                <Helmet>
                    <title>{PAGE_TITLE}</title>
                </Helmet>
                {this.state.loading && (<Loader />)}
                <div id="ReadyToTalkWrapper" className="paperform-embed" data-paperform-id="twwl5rxs" />
            </div>
        )
    }
}

export default ReadyToTalkPage;