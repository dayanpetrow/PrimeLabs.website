import React from 'react';
import { StyledHomeFaqWrapper } from './styledHomeFAQ'
import { SectionTitle } from '../../common/';
import Collapse from 'antd/lib/collapse';
import Radio from 'antd/lib/radio';
import { BlockchainIndustries, BlockchainPlatforms } from '../../../constants/FAQ';
import Fade from 'react-reveal/Fade';

const Panel = Collapse.Panel;

class HomeFAQ extends React.Component {
    state = {
        display: "industries"
    }

    onChange = (e) => {
        this.setState({
          display: e.target.value,
        });
      }

    render() {
        const { display } = this.state;
        return(
            <StyledHomeFaqWrapper>
            <Fade bottom>
                <SectionTitle mainText={"Impact of Blockchain"} shadowText={"FAQ"} />
                <div className="HomeFAQ__text">
                    Remove friction, build trust and unlock new value across 
                    businesses and industries with the power of Blockchain. 
                    What will we solve together?
                </div>
            </Fade>

            <Fade bottom cascade>
            <div className="HomeFAQ__accordion">
                <div className="HomeFAQ__view-change-wrapper">
                    <Radio.Group 
                        buttonStyle="solid" 
                        defaultValue={"industries"} 
                        value={display}
                        onChange={this.onChange}
                        >
                        <Radio.Button value="industries">Industries</Radio.Button>
                        <Radio.Button value="platforms">Blockchain platforms</Radio.Button>
                    </Radio.Group>
                </div>
                
                {display === "industries" &&
                    <Collapse bordered={false} defaultActiveKey={['0']} accordion={true}>
                        {BlockchainIndustries.map((panel,index) => (
                            <Panel header={panel.panelTitle} key={index}>
                            <p>{panel.panelContent}</p>
                            </Panel>
                        ))}
                    </Collapse>
                }
                {display === "platforms" &&
                    <Collapse bordered={false} defaultActiveKey={['0']} accordion={true}>
                        {BlockchainPlatforms.map((panel,index) => (
                            <Panel header={panel.panelTitle} key={index}>
                            <p>{panel.panelContent}</p>
                            </Panel>
                        ))}
                    </Collapse>
                }
            </div>
            </Fade>
        </StyledHomeFaqWrapper>
        )
    }
}

export default HomeFAQ;