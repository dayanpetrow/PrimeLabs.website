import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
    padding-top: 80px;
    .TokenPage__HowItWorks--with-image {
        width: 100%;
        max-width: 1238px;
        margin: 0px auto;
        padding-top: 50px;
        margin-bottom: 50px;
        .HowItWorks__flex-grid {
            display: flex;
            flex-wrap: no-wrap;
            justify-content: center;
            &--left {
                flex: 0 0 330px;
            }
            &--middle {
                flex: 0 0 335px;
                padding-top: 20px;
            }
            &--right {
                flex: 0 0 330px;
            }
        }
        .HowItWorks__bottom-card {
            display: flex;
            justify-content: center;
        }
        @media (max-width: 1238px) {
            display: none;
        }
    }
    .TokenPage__HowItWorks--no-image {

        @media (min-width: 1238px) {
            display: none;
        }
    }
    .TokenPage__benefits {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        width: 100%;
        max-width: 960px;
        margin: 0px auto;
        justify-content: space-evenly;
        margin-bottom: 100px;
        .TokenPage__benefits__item {
            max-width: 175px;
            width: 100%;
            text-align: center;
            .TokenPage__benefits__text-wrapper {
                font-size: 18px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: normal;
                letter-spacing: 0.5px;
                color: #1565c0;
                margin-top: -20px;
            }
            .TokenPage__image-wrapper {
                width: 100%;
                > img {
                    margin: 0px auto;
                }
            }
        }
    }
`

export const HowItWorksCardWrapper = styled.div`
    padding-top: ${props => props.paddingTop ? props.paddingTop : "0px"};
    max-width: 330px;
    width: 100%;
    text-align: ${props => props.align};
    .HowItWorksCard__number {
        font-size: 36px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.19;
        letter-spacing: 1.2px;
        color: ${props => props.numberColor};
        margin-bottom: 5px;
    }
    .HowItWorksCard__title {
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.13;
        letter-spacing: 0.7px;
        color: #000000;
        margin-bottom: 10px;
    }
    .HowItWorksCard__content {
        max-width: ${props => props.textWidth};
        width: 100%;
        margin: 0px auto;
        opacity: 0.5;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
    }
`