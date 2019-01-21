import styled from 'styled-components';

export const StyledWhiteLabelPageContent = styled.div`
    padding-top: 30px;
    .RightOvalBackground {
        z-index: 12;
        position: relative;
        width: 100%;
        padding-top: 40px;
        .Oval {
            position: absolute;
            right: 0px;
            top: -450px;
            z-index: 12;
        }
    }
`

export const SectionWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    padding-top: ${props => props.paddingTop || "70px"};
    .Benefits__flex-grid {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        margin-bottom: 100px;
        .Benefits__flex-grid__item {
            max-width: 200px;
            width: 100%;
            text-align: center;
            .Benefits__text-wrapper {
                font-size: 18px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.5px;
                color: #1565c0;
                margin-top: -20px;
            }
            .Benefits__image-wrapper {
                width: 100%;
                > img {
                    margin: 0px auto;
                }
            }
        }
    }
    .CaseStudies__flex-grid {
        display: flex;
        flex-wrap: no-wrap;
        justify-content: space-evenly;
        padding-top: 30px;
        .CaseStudies__flex-grid__item {
            margin: 10px;
            width: 100%;
            max-width: 500px;
            min-width: 300px;
            height: 400px;
            overflow: hidden;
            border-radius: 3px;
            border: 1px solid white;
            padding: 50px 20px 50px 50px;
            position: relative;
            &__image {
                > img {
                    max-width: 450px;
                    max-height: 254px;
                }
            }
            &__title {
                padding-top: 25px;
                font-size: 24px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.13;
                letter-spacing: 0.7px;
                color: #000000;
            }
            &__more {
                position: absolute;
                bottom: 55px;
                > a {
                    opacity: 0.5;
                    font-size: 14px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.64;
                    letter-spacing: 0.1px;
                    color: #000000;
                    text-decoration: none;
                }
            }
        }
`