import styled from 'styled-components';

export const CaseStudyFullWidthParagraph = styled.div`
    width: 100%;    
    margin: 20px auto;
    max-width: 1101px;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.44;
    letter-spacing: 0.5px;
    color: #1f1f1f;
    @media (max-width: 1280px) {
        padding-left: 24px;
        max-width: 980px;
    }
    @media (max-width: 960px) {
        width: 90%;
        text-align: center;
    }
`