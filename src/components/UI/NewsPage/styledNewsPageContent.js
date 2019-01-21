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
    max-width: 1238px;
    margin: 0px auto;
    padding-top: 30px;
    .News__flex-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
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
            padding: 50px 20px 50px 50px;
            &__title {
                opacity: 0.5;
                font-size: 24px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.79;
                letter-spacing: 0.8px;
                color: #1f1f1f;
                max-width: 472px;
            }
            &__summary {
                opacity: 0.5;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.44;
                letter-spacing: 0.5px;
                color: #1f1f1f;
                max-width: 453px;
                padding: 14px 0px;
            }
            &__date {
                opacity: 0.5;
                font-size: 14px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.64;
                letter-spacing: 0.1px;
                color: #000000;
            }
            &:hover {
                transition: all 0.5s ease;
                border: 1px solid red;
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

