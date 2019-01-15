import styled from 'styled-components';

export const StyledHomePartnersWrapper = styled.div`
    width: 100%;
    background-color: #00a0df;
    min-height: 153px;
    margin: 50px 0;
    .HomePartners__content-wrapper {
        width: 100%;
        max-width: 1440px;
        margin: 0px auto;
        display: flex;
        min-height: 153px;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: center;
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