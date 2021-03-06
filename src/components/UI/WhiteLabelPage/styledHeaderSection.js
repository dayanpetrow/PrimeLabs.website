import styled from 'styled-components';
import HeaderCover from '../../../images/white_label/bg@3x.png'

export const StyledHeader = styled.div`
    height: 80vh;
    min-height: 607px;
    max-height: 700px;
    width: 100%;
    background-image: url(${HeaderCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position:  center center;
    @media (max-width: 900px) {
      height: 100%;
      max-height: 100%;
      padding-bottom: 50px;
    }
    .WhiteLabel__header-content-wrapper {
        width: 100%;
        max-width: 1238px;
        margin: 0px auto;
        text-align: left;
        padding-top: 143px;
        @media (max-width: 1280px) {
          max-width: 980px;
          padding-left: 30px;
        }
        @media (max-width: 960px) {
          text-align: center;
          width: 80%;
          padding-left: 0px;
        }
        .WhiteLabel__page-name {
            font-size: 18px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 2.39;
            letter-spacing: 1.2px;
            color: #1565c0;
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
            @media (max-width: 980px) {
              font-size: 32px;
            }
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
            @media (max-width: 960px) {
              text-align: center;
              width: 100%;
              max-width: 100%;
              padding: 0px 30px;
            }
        }
    }
`