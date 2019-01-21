import styled from 'styled-components';

export const SectionWithBackground = styled.div`
    width: 100%;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: ${props => props.backgroundPosition};
    padding: 80px 0px 40px 0px;
    min-height: 1050px;
    position: relative;
    .SecondBackground {
        position: absolute;
        width: 100%;
        opacity: 1;
        top: 0;
        left: 0;
        height: 100%;
        background-image: linear-gradient(rgba(250,252,252, 0.3) 10%, rgba(250,250,250, 1) 100%);
        z-index: 9;
    }
`

export const StyledFlexSection = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.config.sectionBottomMargin}px;
    .FlexSection__left-column {
        z-index: 10;
        width: 100%;
        max-width: ${props => props.config.leftColumnSize}px;
    }
    .FlexSection__right-column {
        z-index: 10;
        width: 100%;
        max-width: ${props => props.config.rightColumnSize}px;
    }
    .FlexSection__text-wrapper {
        max-width: ${props => props.config.textSize}px;
        width: 100%;
        margin: 0px auto;
        .FlexSection__title {
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
        width: 100%;
        text-align: center;
        > img {
            max-width: ${props => props.config.imageSize}px;
            margin: 0px auto;
            margin-top: ${props => props.config.imageMarginTop}px;
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