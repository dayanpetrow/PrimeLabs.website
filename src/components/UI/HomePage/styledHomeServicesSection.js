import styled from 'styled-components';

export const StyledHomeServicesWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 50px auto;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .HomeServices__flex-grid {
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding: 0px 10px 0px 10px;
        &__column {
            cursor: pointer;
            min-width: 300px;
            max-width: 378px;
            min-height: 430px;
            overflow: hidden;
            flex: 1;
            text-align: center;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            border: 1px solid #fff;
            border-color: transparent;
            position: relative;
            @media (max-width: 1280px) {
                max-width: 300px;
            }
            &:hover, &:active {
                border: 1px solid #00a0df;
                transition: all 0.5s ease;
                .HomeServices__button-wrapper {
                    opacity: 1;
                    transition: all 0.8s ease;
                    transform: translateY(0px);
                }
            }
            .HomeServices__image {
                &--white-label {
                    width: 100%;
                    position: absolute;
                    top: 56px;
                    > img {
                        margin: 0px auto;
                    }
                }
                &--blockchain {
                    width: 100%;
                    position: absolute;
                    top: 51px;
                    > img {
                        margin: 0px auto;
                    }
                }
                &--ico {
                    width: 100%;
                    position: absolute;
                    top: 25px;
                    > img {
                        margin: 0px auto;
                    }
                }
            }
            .HomeServices__title-wrapper {
                position: absolute;
                top: 155px;
                width: 100%;
                .HomeServices__title {
                    font-size: 24px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.13;
                    letter-spacing: 0.7px;
                    text-align: center;
                    color: #00a0df;
                    @media (max-width: 1280px) {
                        font-size: 22px;
                    }
                }
            }
            .HomeServices__separator {
                position: absolute;
                top: 190px;
                width: 100%;
                > img {
                    margin: 0px auto;
                }
            }
            .HomeServices__description-wrapper {
                position: absolute;
                top: 200px;
                width: 100%;
                text-align: center;
                .HomeServices__description {
                    margin: 21px auto 0px auto;
                    max-width: 335px;
                    width: 100%;
                    padding: 0 10px;
                    font-size: 16px;
                    font-weight: normal;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.44;
                    letter-spacing: 0.5px;
                    color: #1f1f1f;
                    @media (max-width: 1280px) {
                        font-size: 15px;
                    }
                }
            }
            .HomeServices__button-wrapper {
                width: 100%;
                text-align: center;
                position: absolute;
                bottom: 52px;
                opacity: 0;
                transform: translateY(100px);
            }
        }
    }
`