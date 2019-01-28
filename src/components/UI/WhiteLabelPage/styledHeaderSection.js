import styled, {keyframes} from 'styled-components';
import HeaderCover from '../../../images/white_label/bg@3x.png'

const translateAnimation = keyframes`
  0% {
    transform: translateY(-50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px)
    opacity: 1;
  }
`

const translateRightAnimation = keyframes`
  0% {
    transform: translateX(50px);
    opacity: 0;
  }
  100% {
    transform: translateX(0px)
    opacity: 1;
  }
`


export const StyledHeader = styled.div`
    height: 80vh;
    max-height: 607px;
    min-height: 480px;
    width: 100%;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  center center;
    .WhiteLabel__header-content-wrapper {
        width: 100%;
        max-width: 1238px;
        margin: 0px auto;
        text-align: left;
        padding-top: 143px;
        @media (max-width: 1280px) {
          max-width: 980px;
          padding-top: 110px;
        }
        .WhiteLabel__page-name {
            font-size: 18px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 2.39;
            letter-spacing: 1.2px;
            color: #1565c0;
            animation: ${translateAnimation} 0.5s ease-in;
        }
        .WhiteLabel__page-title {
            margin: 10px 0px 30px 0px;
            max-width: 728px;
            font-size: 55px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.13;
            letter-spacing: 1.5px;
            color: #1f1f1f;
            text-transform: uppercase;
            animation: ${translateRightAnimation} 0.5s ease-in;
        }
        .WhiteLabel__page-description {
            max-width: 614px;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            text-align: justify;
            color: #1f1f1f;
            margin: 15px 0px;
            animation: ${translateRightAnimation} 0.5s ease-in;
        }
    }
`