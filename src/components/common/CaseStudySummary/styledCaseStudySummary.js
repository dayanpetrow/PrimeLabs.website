import styled from 'styled-components';

export const StyledSummaryWrapper = styled.div`
    width: 100;
    max-width: 829px;
    margin: 0px auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 100px;
    @media (max-width: 900px) {
        padding: 20px;
        margin-bottom: 50px;
    }
    .SummaryRow {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-evenly;
        padding-bottom: 20px;
        padding-top: 20px;
        border-bottom: 2px solid #979797;
        &__title {
            flex: 0 0 170px;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.5px;
            color: #1f1f1f;
            @media (max-width: 850px) {
                flex: 0 0 auto;
                text-align: center;
                width: 100%;
                padding: 0px 30px;
            }
        }
        &__content {
            flex: 1 1;
            min-width: 400px;
            font-size: 16px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 0.5px;
            color: #1f1f1f;
            @media (max-width: 850px) {
                flex: 0 0 auto;
                text-align: center;
                width: 80%;
                min-width: 300px;
                padding: 10px 30px 0px 30px;
            }
        }
    }
`

/* text-align center for mobile */