import styled from 'styled-components';

export const StyledSectionTitleWrapper = styled.div`
    max-width: 1440px;
    margin: 0px auto;
    margin-top: ${props => props.marginTop};
    margin-bottom: ${props => props.marginBottom};
    width: 100%;
    overflow: hidden;
    height: 100px;
    position: relative;
    .SectionTitle__shadow-title {
        width: 100%;
        text-align: center;
        text-transform: uppercase;
        color: #eff3fa;
        font-size: 6vw;
        font-weight: 900;
        letter-spacing: 2px;
        position: relative;
        line-height: 5vw;
        position: absolute;
        bottom: 0px;
        @media (max-width: 900px) {
            display: none;
        }
    }
    .SectionTitle__main-title {
        width: 100%;
        text-align: center;
        letter-spacing: 1px;
        color: #1f1f1f;
        font-size: 36px;
        line-height: 38px;
        text-transform: ${props => props.uppercase ? "uppercase" : "none"};
        font-weight: bold;
        position: absolute;
        bottom: 0px;
        @media (max-width: 960px) {
            padding: 0px 30px;
        }
    }
`
