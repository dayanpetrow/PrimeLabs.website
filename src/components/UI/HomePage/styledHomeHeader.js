import styled from 'styled-components';
import HeaderCover from '../../../images/home_header/bg@3x.jpg'

export const HomeHeaderWrapper = styled.div`
    height: 80vh;
    max-height: 763px;
    min-height: 450px;
    width: 100%;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    padding-top: 27px;
    .HomeHeader__content-wrapper {
        width: 100%;
        max-width: 1440px;
        margin: 0px auto;
        .HomeHeader__title {
            margin: 0 auto;
            max-width: 930px;
            margin-top: calc(50px + 15vh);
            font-size: calc(28px + 2vw);
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            text-transform: uppercase;
            line-height: 1.19;
            letter-spacing: 1.5px;
            text-align: center;
            color: #1f1f1f;
        }
        .HomeHeader__subtitle {
            margin: 0 auto;
            margin-top: calc(40px + 1vh);
            max-width: 572px;
            padding: 0 3vmin 0 3vmin;
            font-family: Roboto;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            text-align: center;
            color: #1f1f1f;
        }
    }
    .navigation-placeholder {
        width: 100%;
        height: 45px;
        background-color: orange;
        text-align: center;
        color: white;
        line-height: 45px;
    }
`