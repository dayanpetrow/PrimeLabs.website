import styled from 'styled-components';

/* d9e3f8, 3172fd */

export const StyledOurWorkWithScrollWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .OurWorkWithScroll {
        width: 100%;
        max-width: 1238px;
        padding-top: 30px;
        overflow-x: scroll;
        display: flex;
        padding: 40px 0px;
        justify-content: flex-start;
        @media (max-width: 1280px) {
            max-width: 980px;
        }
        &::-webkit-scrollbar {
            padding: 0px 60px;
            height: 10px;
            background-color: #d9e3f8;
            box-shadow: none;
            border-radius: 0px;
        }
        &::-webkit-scrollbar-thumb {
            box-shadow: none;
            width: 5px;
            height: 10px;
            background-color: #3172fd;
            border-radius: 5px;
            border: 5px solid #3172fd;
        }
        &::-webkit-scrollbar-track {
            box-shadow: none;
            border-radius: 0px;
            border: 4px solid #f9f9f9;
        }
        .OurWorkWithScroll__column {
            display: inline-block;
            margin-right: 90px;
            .OurWorkWithScroll__item-wrapper {
                border-radius: 3px;
                border: 1px solid #9b9b9b;
                position: relative;
                height: 487px;
                width: 571px;
                @media (max-width: 1280px) {
                    width: 432px;
                    height: 350px;
                }
                .OurWorkWithScroll__item__image {
                    position: absolute;
                    top: 45px;
                    left: 60px;
                    @media (max-width: 1280px) {
                        top: 35px;
                        left: 50px;
                    }
                    > img {
                        max-width: 450px;
                        max-height: 254px;
                        @media (max-width: 1280px) {
                            max-width: 330px;
                            max-height: 200px;
                        }
                    }
                }
                .OurWorkWithScroll__item__title {
                    position: absolute;
                    top: 324px;
                    left: 60px;
                    max-width: 453px;
                    font-size: 24px;
                    font-weight: 500;
                    font-style: normal;
                    font-stretch: normal;
                    line-height: 1.13;
                    letter-spacing: 0.7px;
                    color: #000000;
                    @media (max-width: 1280px) {
                        max-width: 400px;
                        top: 230px;
                        left: 50px;
                    }
                }
                .OurWorkWithScroll__item__more {
                    position: absolute;
                    bottom: 55px;
                    left: 60px;
                    @media (max-width: 1280px) {
                        bottom: 25px;
                        left: 50px;
                    }
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
                        &:hover {
                            color: #00a0df;
                            transition: 0.4s;
                            > span {
                                color: color: #00a0df;
                            }
                        }
                        > span {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
`