import styled from 'styled-components';
import HeaderCover from '../../../images/home_faq/bg@3x.jpg'

export const StyledHomeFaqWrapper = styled.div`
    height: 1000px;
    padding-top: 100px;
    background-color: #dedede;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    .HomeFAQ__text {
        width: 90%;
        max-width: 950px;
        margin: 27px auto;
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        text-align: center;
        color: #1f1f1f;
    }
    .placeholder {
        width: 950px;
        margin: 0px auto;
        display: flex;
        height: 600px;
        justify-content: center;
        align-items: center;
        color: black;
        font-size: 48px;
    }
`