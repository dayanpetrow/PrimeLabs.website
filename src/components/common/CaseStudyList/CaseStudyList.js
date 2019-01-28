import styled from 'styled-components';

export const CaseStudyList = styled.div`
    width: 100%;
    max-width: 1101px;
    margin: 0px auto;
    margin-bottom: 15px;
    @media (max-width: 1280px) {
        padding-left: 30px;
    }
    .CaseStudyList__item {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
        position: relative;
        padding-left: 20px;
        &:before {
            content: "•";
            position: absolute;
            left: 0;
            top: 0;
        }
    }
`