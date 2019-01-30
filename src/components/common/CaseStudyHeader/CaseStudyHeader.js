import React from 'react';
import { withRouter } from "react-router";
import { 
    StyledCaseStudyHeader, 
    StyledPositionWrapper,
    StyledHeaderDescriptions
} from './styledCaseStudyHeader';
import { PrimeButton, buttonThemes } from '../../common/'
import Fade from 'react-reveal/Fade';

const CaseStudyHeader = ({ data, history }) => (
    <React.Fragment>
        <StyledCaseStudyHeader 
            headerCover={data.headerCover} 
            headerPosition={data.headerPosition} 
        >
            <div className="Header__content-wrapper" />
            <StyledPositionWrapper titleSize={data.titleSize}>
                <div className="HeaderCS__title-wrapper">
                    <Fade left>
                        <div className="HeaderCS__title">
                            <h1>{data.title}</h1>
                            {data.withButton &&
                                <div className="HeaderCS__button">
                                    <PrimeButton 
                                        theme={buttonThemes.blue} 
                                        onClick={() => { history.push(data.buttonUrl) }}
                                        width={"160px"} 
                                        >
                                        {data.buttonText}
                                    </PrimeButton>
                                </div>
                            }
                        </div>
                    </Fade>
                </div>
            </StyledPositionWrapper>
        </StyledCaseStudyHeader>
        <StyledHeaderDescriptions>
            <div className="HeaderMobile__button">
                <div className="HeaderCS__button">
                    <PrimeButton 
                        theme={buttonThemes.blue} 
                        onClick={() => { history.push(data.buttonUrl) }}
                        width={"160px"} 
                        >
                        {data.buttonText}
                    </PrimeButton>
                </div>
            </div>
            <div className="HeaderMobile__title">
                {data.title}
            </div>
            {(data.descriptions).map((element,index) => {
                const item = Array.isArray(element);
                return !item ? (
                        <Fade left delay={500} key={index}>
                            <p>{element}</p>
                        </Fade>
                    ) : (
                        <Fade left delay={500} key={index}>
                            <div className="HeaderList">
                                {element.map((listItem, itemIndex) => (
                                    <div className="HeaderList__item" key={itemIndex}>
                                        {listItem}
                                    </div>
                                ))}
                            </div>
                        </Fade>
                    )
            })}
        </StyledHeaderDescriptions>
    </React.Fragment>
)

export default withRouter(CaseStudyHeader);