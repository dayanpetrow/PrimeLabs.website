import styled from 'styled-components';
import HeaderCover from '../../../images/home_faq/bg@3x.jpg'

export const StyledHomeFaqWrapper = styled.div`
    padding: 100px 0px;
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
    .HomeFAQ__accordion {
        width: 100%;
        max-width: 934px;
        margin: 0px auto;
        .HomeFAQ__view-change-wrapper {
            width: 100%;
            text-align: center;
            margin: 10px 0px 30px 0px;
            .ant-radio-button-wrapper-checked {
                background: #00a0df;
                border: 1px solid #00a0df;
            }
            .ant-radio-button-wrapper {
                height: 42px;
                > span:last-child {
                    line-height: 40px;
                    padding: 0px 20px;
                    font-size: 16px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    letter-spacing: 0.5px;
                }
            }
            .ant-radio-button-wrapper:first-child {
                border-radius: 40px 0px 0px 40px;
            }
            .ant-radio-button-wrapper:last-child {
                border-radius: 0 40px 40px 0;
            }
        }
        .ant-collapse-borderless {
            background-color: transparent;
            .ant-collapse-item {
                border: none;
            }
            .ant-collapse-header {
                border-radius: 3px;
                box-shadow: 0 5px 25px 0 rgba(88, 154, 253, 0.3);
                background-image: linear-gradient(to right, #00a0df, #0282b4);
                height: 68px;
                margin-top: 5px;
                width: 100%;
                line-height: 46px;
                font-size: 16px;
                font-weight: 500;
                font-style: normal;
                font-stretch: normal;
                letter-spacing: 0.5px;
                color: #ffffff;
                padding-left: 30px;
                > .arrow {
                    top: 37px;
                    left: 95%;
                    color: white;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
            .ant-collapse-content-box {
                background: transparent;
                padding: 11px 30px 0px 30px;
                > p {
                    border-left: 1px solid #00a0df;
                    padding: 25px;
                    font-size: 16px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.44;
                    letter-spacing: 0.5px;
                    color: #1f1f1f;
                }
            }
        }
    }
`