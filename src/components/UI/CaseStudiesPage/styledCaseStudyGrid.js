import styled, { keyframes } from 'styled-components';

const newsKeyframes = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const StyledCaseStudyGridWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    padding-top: 30px;
    .CaseStudies__flex-grid {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-top: 30px;
        .CaseStudies__flex-grid__item {
            margin: 10px;
            animation: ${newsKeyframes} 0.5s ease-in;
            width: 100%;
            max-width: 500px;
            min-width: 300px;
            height: 400px;
            overflow: hidden;
            border-radius: 3px;
            border: 1px solid white;
            padding: 50px 20px 50px 50px;
            position: relative;
            &__image {
                > img {
                    max-width: 450px;
                    max-height: 254px;
                }
            }
            &__title {
                padding-top: 25px;
                font-size: 24px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.13;
                letter-spacing: 0.7px;
                color: #000000;
            }
            &__more {
                position: absolute;
                bottom: 55px;
                > a {
                    opacity: 0.5;
                    font-size: 14px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.64;
                    letter-spacing: 0.1px;
                    color: #000000;
                    text-decoration: none;
                }
            }
        }
    }
`