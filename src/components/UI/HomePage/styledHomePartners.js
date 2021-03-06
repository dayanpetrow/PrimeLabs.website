import styled from 'styled-components';

export const StyledHomePartnersWrapper = styled.div`
    width: 100%;
    background-color: #00a0df;
    min-height: 153px;
    margin: 50px 0;
    .HomePartners__content-wrapper {
        width: 100%;
        max-width: 1280px;
        margin: 0px auto;
        display: flex;
        min-height: 153px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
        @media (max-width: 1280px) {
            max-width: 980px;
        }
        .HomePartners__partner {
            display: flex;
            flex: 1;
            min-height: 153px;
            max-width: 200px;
            margin: 0px 30px;
            justify-content: center;
            align-items: center;
            > img {
                width: 180px;
            }
        }
    }
`