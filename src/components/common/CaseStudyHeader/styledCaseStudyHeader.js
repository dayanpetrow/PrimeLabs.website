import styled from 'styled-components';

export const StyledCaseStudyHeader = styled.div`
    margin-top: 108px;
    width: 100%;
    height: 500px;
    background-image: url(${props => props.headerCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: ${props => props.headerPosition || "center"};
    position: relative;
    .Header__content-wrapper {
        width: 40%;
        min-height: 163px;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        left: 0;
        @media (max-width: 900px) {
            display: none;
        }
    }
`

export const StyledPositionWrapper = styled.div`
    width: 100%;
    min-width: 300px;
    min-height: 163px;
    position: absolute;
    bottom: 0;
    left: 0;
    .HeaderCS__title-wrapper {
        width: 100%;
        max-width: 1238px;
        margin: 0px auto;
        min-height: 163px;
        height: 163px;
        @media (max-width: 1280px) {
            padding-left: 30px;
        }
        @media (max-width: 900px) {
            display: none;
        }
        .HeaderCS__title {
            position: relative;
            padding: 55px 227px 23px 0px;
            background-color: white;
            width: calc(${props => props.titleSize ? props.titleSize : "477px"} + 227px);
            height: 165px;
            > .HeaderCS__button {
                position: absolute;
                top: 55px;
                right: 40px;
            }
            > h1 {
                max-width: ${props => props.titleSize ? props.titleSize : "477px"};
                font-size: 35px;
                font-weight: bold;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.23;
                letter-spacing: normal;
                color: #1f1f1f;
                text-transform: uppercase;
            }
        }
    }
`

export const StyledHeaderDescriptions = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    .HeaderMobile__button {
        width: 100%;
        text-align: center;
        padding: 40px 15px 15px 15px;
        @media (min-width: 900px) {
            display: none;
        }
    }
    .HeaderMobile__title {
        width: 100%;
        padding: 15px 30px;
        font-size: 28px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.23;
        letter-spacing: normal;
        color: #1f1f1f;
        text-transform: uppercase;
        text-align: center;
        @media (min-width: 900px) {
            display: none;
        }
    }
    > p {
        width: 100%;
        max-width: 620px;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
        @media (max-width: 1280px) {
            padding: 0px 30px;
        }
        @media (max-width: 960px) {
            padding: 30px;
            text-align: center;
            max-width: 100%;
        }
    }
    .HeaderList {
        width: 100%;
        max-width: 620px;
        margin-bottom: 15px;
        @media (max-width: 1280px) {
            padding: 0px 30px;
        }
        .HeaderList__item {
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            color: #1f1f1f;
            position: relative;
            padding-left: 20px;
            &:before {
                content: "•";
                position: absolute;
                left: 0;
                top: 0;
            }
        }
    }
`