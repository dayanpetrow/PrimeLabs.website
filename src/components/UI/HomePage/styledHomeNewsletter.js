import styled from 'styled-components';

export const StyledHomeNewsletterWrapper = styled.div`
    width: 100%;
    background-image: linear-gradient(to top, #00a0df , #0282b4);
    min-height: 140px;
    margin-top: 53px;
    .HomeNewsletter__content-wrapper {
        width: 100%;
        max-width: 1280px;
        margin: 0px auto;
        display: flex;
        min-height: 140px;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        .HomeNewsletter__text {
            margin: 0px 20px;
            max-width: 309px;
            min-width: 300px;
            flex: 1;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            color: #ffffff;
        }
        .HomeNewsletter__input-wrapper {
            flex: 1;
            margin: 0px 20px;
            max-width: 488px;
            position: relative;
            .HomeNewsletter__input {
                height: 41px;
                width: 401px;
                border-radius: 35px;
                border: 1px solid white;
                background-color: #0e93c6;
                padding-left: 30px;
                padding-right: 50px;
                color: white;
                font-size: 14px;
                outline: none;
                letter-spacing: 0.7px;
                &::placeholder {
                    color: #86cbe5;
                }
            }
            .Homenewsletter__button {
                border-radius: 35px;
                background-color: #f0426c;
                width: 175px;
                height: 45px;
                border: none;
                text-transform: uppercase;
                line-height: 45px;
                font-size: 15px;
                letter-spacing: 1.1px;
                color: white;
                position: absolute;
                top: 0;
                right: 0px;
                box-shadow: 0 7px 25px 0 rgba(49, 114, 253, 0.5);
            }
        }
    }
`