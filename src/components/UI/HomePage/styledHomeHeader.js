import styled, {keyframes} from 'styled-components';
import HeaderCover from '../../../images/home_header/bg@3x.jpg'

const scaleAnimation = keyframes`
  0% {
    transform: translateY(-30px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px)
    opacity: 1;
  }
`

const opacityAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const HomeHeaderWrapper = styled.div`
    height: 80vh;
    max-height: 763px;
    min-height: 480px;
    width: 100%;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    .HomeHeader__content-wrapper {
        width: 100%;
        max-width: 1280px;
        margin: 0px auto;
        padding-top: 288px;
        @media (max-width: 1280px) {
            max-width: 980px;
            padding-top: 220px;
        }
        .HomeHeader__title {
            margin: 0 auto;
            max-width: 930px;
            font-size: calc(28px + 2vw);
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            text-transform: uppercase;
            line-height: 1.19;
            letter-spacing: 1.5px;
            text-align: center;
            color: #1f1f1f;
            animation: ${scaleAnimation} 1s;
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
            animation: ${opacityAnimation} 1.5s ease-in;
        }
    }
`