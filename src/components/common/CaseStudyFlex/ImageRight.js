import styled from 'styled-components';

export const FlexImageRight = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
    .CaseStudyFlex__content {
        flex: 0 1 659px;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
        &-list {
            margin-bottom: 15px;
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
    }
    .CaseStudyFlex__image {
        flex: 0 1 ${props => props.maxWidthImage};
        > img {
            max-width: ${props => props.maxWidthImage};
            margin: 0px auto;
        }
    }
`