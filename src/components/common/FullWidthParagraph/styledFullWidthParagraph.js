import styled from 'styled-components';

export const FullWidthParagraphWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    @media (max-width: 980px) {
        padding: 0px 30px;
    }
    > p {
        width: 100%;
        max-width: 1001px;
        margin: 0px auto;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
        padding: 10px 0;
    }
`