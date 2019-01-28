import styled, { keyframes } from 'styled-components';

const newsKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const ContentWrapper = styled.div`
  width: 100%;
  padding-top: 108px;
`

export const StyledCaseStudyGridWrapper = styled.div`
    width: 100%;
    max-width: 1100px;
    margin: 0px auto;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .CaseStudies__flex-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 30px;
        @media (max-width: 950px) {
            justify-content: center;
        }
        .CaseStudies__flex-grid__item {
            margin: 30px;
            animation: ${newsKeyframes} 0.5s ease-in;
            width: 100%;
            max-width: 450px;
            min-width: 300px;
            overflow: hidden;
            @media (max-width: 1280px) {
                max-width: 400px;
            }
            @media (max-width: 500px) {
                max-width: 100%;
                margin: 0;
            }
            .CaseStudyCard__content-wrapper {
                position: relative;
                height: 400px;
                width: 100%;
                max-width: 450px;
                margin: 0px auto;
                @media (max-width: 500px) {
                    max-width: 90%;
                }
                .CaseStudyCard__image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    @media (max-width: 500px) {
                        position: static;
                        width: 100%;
                        display: flex;
                        align-items: center;
                    }
                    > img {
                        max-width: 450px;
                        max-height: 254px;
                        @media (max-width: 500px) {
                            max-width: 80%;
                            margin: 0px auto;
                        }
                    }
                }
                .CaseStudyCard__title {
                    font-size: 24px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.13;
                    letter-spacing: 0.7px;
                    color: #000000;
                    position: absolute;
                    top: 275px;
                    left: 0;
                    @media (max-width: 500px) {
                        position: static;
                        width: 100%;
                        padding: 20px;
                        text-align: center;
                    }
                }
                .CaseStudyCard__more {
                    position: absolute;
                    bottom: 0px;
                    @media (max-width: 500px) {
                        position: static;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        text-align: center;
                    }
                    > a {
                        font-size: 14px;
                        font-weight: 500;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.64;
                        letter-spacing: 0.1px;
                        color: #9B9B9B;
                        text-decoration: none;
                        transition: 0.4s;
                        @media (max-width: 500px) {
                            width: 100%;
                            text-align: center;
                        }
                        &:hover {
                            color: #00a0df;
                            transition: 0.4s;
                            > span {
                                color: color: #00a0df;
                            }
                        }
                        > span {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
`