import styled from 'styled-components';

export const StyledFlexSection = styled.div`
    padding: ${props => props.config.padding};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    z-index: 3;
    max-width: 1238px;
    margin: 0px auto;
    margin-bottom: ${props => props.config.sectionBottomMargin}px;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .FlexSection__left-column {
        flex: 0 1 ${props => props.config.leftColumnSize}px;
        @media (max-width: 1280px) {
            max-width: 450px;
        }
    }
    .FlexSection__right-column {
        flex: 0 1 ${props => props.config.rightColumnSize}px;
        @media (max-width: 1280px) {
            max-width: 450px;
        }
    }
    .FlexSection__text-wrapper {
        max-width: ${props => props.config.textSize}px;
        width: 100%;
        margin: 0px auto;
        @media (max-width: 1280px) {
            padding: 0px 24px;
            max-width: 500px;
        }
        .FlexSection__title {
            z-index: 3;
            font-size: 35px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.23;
            letter-spacing: normal;
            color: #1f1f1f;
            text-transform: uppercase;
        }
        .FlexSection__description {
            margin-top: 15px;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            color: #1f1f1f;
        }
    }
    .FlexSection__image-wrapper {
        flex: 0 1 ${props => props.imageSize};
        > img {
            width: 100%;
            max-width: ${props => props.imageSize};
            margin: 0px auto;
            margin-top: ${props => props.config.imageMarginTop}px;
            @media (max-width: 1280px) {
                max-width: 400px;
            }
        }
    }
    .FlexSection__list {
        padding-top: 15px;
        min-height: 50px;
        &__item {
            position: relative;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            color: #1f1f1f;
            margin: 10px 0px;
            padding-left: 20px;
            &::before {
                content: "";
                border-radius: 50%;
                width: 8px;
                height: 8px;
                background-color: #00a0df;
                position: absolute;
                left: 0px;
                top: 8px;
            }
        }
    }
`