import styled from 'styled-components';

export const FlexImageRight = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .CaseStudyFlex__paragraph-header {
        font-size: 18px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 2.39;
        letter-spacing: normal;
        color: #1f1f1f;
        text-transform: uppercase;
    }
    .CaseStudyFlex__content {
        flex: 0 1 659px;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
        @media (max-width: 1280px) {
            flex: 0 1 550px;
            padding-left: 24px;
        }
        @media (max-width: 900px) {
            text-align: center;
            padding: 0px 30px;
        }
        &-list {
            margin-bottom: 15px;
            text-align: left;
            &-item {
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
        .CaseStudyFlex__image--in {
            width: 100%;
            display: flex;
            align-items: center;
            > img {
                width: 100%;
                max-width: 450px;
                margin: 0px auto;
            }
        }
    }
    .CaseStudyFlex__image {
        flex: 0 1 ${props => props.maxWidthImage};
        @media (max-width: 1280px) {
            flex: 0 1 400px;
        }
        @media (max-width: 900px) {
            text-align: center;
            padding: 0px 30px;
        }
        > img {
            width: 100%;
            max-width: ${props => props.maxWidthImage};
            margin: 0px auto;
        }
    }
`