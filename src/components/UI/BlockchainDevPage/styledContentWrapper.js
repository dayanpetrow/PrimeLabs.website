import styled from 'styled-components';

export const StyledContentWrapper = styled.div`
    width: 100%;
    padding-top: 50px;
    .SectionWrapper {
        margin: 50px 0px;
        &__image {
            width: 100%;
            text-align: center;
            max-width: 1238px;
            margin: 0px auto;
            @media (max-width: 1280px) {
                max-width: 980px;
            }
            &--public {
                max-width: 723px;
                width: 100%;
                margin: 0px auto;
                margin: 50px 10px;
                @media (max-width: 1280px) {
                    max-width: 550px;
                }
            }
            &--permissioned {
                max-width: 723px;
                width: 100%;
                margin: 0px auto;
                margin: 50px 10px;
                @media (max-width: 1280px) {
                    max-width: 550px;
                }
            }
        }
    }
`