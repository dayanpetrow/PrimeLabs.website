import styled, { keyframes } from 'styled-components';

const newsKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledNewsContentWrapper = styled.div`
    width: 100%;
    max-width: 1050px;
    margin: 0px auto;
    padding-top: 108px;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .News__flex-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding-top: 30px;
        .News__flex-grid__item {
            margin: 10px;
            animation: ${newsKeyframes} 0.5s ease-in;
            width: 100%;
            max-width: 500px;
            min-width: 300px;
            overflow: hidden;
            border-radius: 3px;
            border: 1px solid white;
            border-color: transparent;
            padding: 50px 20px 50px 50px;
            @media (max-width: 1280px) {
                max-width: 450px;
                padding: 30px 30px 30px 30px;
            }
            @media (max-width: 600px) {
                max-width: 100%;
                padding: 30px 30px 30px 30px;
                text-align: center;
                margin: 0px auto;
            }

            &__title {
                font-size: 24px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.79;
                letter-spacing: 0.8px;
                color: #8c8c8c;
                max-width: 472px;
            }
            &__summary {
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.44;
                letter-spacing: 0.5px;
                color: #8c8c8c;
                max-width: 453px;
                padding: 14px 0px;
            }
            &__date {
                font-size: 14px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.64;
                letter-spacing: 0.1px;
                color: #828282;
            }
            &:hover {
                transition: all 0.5s ease;
                border: 1px solid #1968c1;
                .News__flex-grid__item__title,
                .News__flex-grid__item__summary,
                .News__flex-grid__item__date {
                    color: #1968c1;
                }
            }
        }
    }
    .News__load-button {
        margin: 20px 0;
        width: 100%;
        max-width: 1238px;
        text-align: center;
    }
`

export const NoNews = styled.div`
    width: 100%;
    text-align: center;
    padding-top: 20vh;
    > h1 {
        padding: 30px;
        font-size: 48px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #8c8c8c;
    }
`