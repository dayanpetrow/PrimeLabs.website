import styled from 'styled-components';

export const StyledWhiteLabelPageContent = styled.div`
    padding-top: 50px;
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
`