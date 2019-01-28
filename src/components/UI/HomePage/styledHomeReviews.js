import styled from 'styled-components';
import PatternBackground from '../../../images/svgs/pattern_background.svg';

export const StyledHomeReviewsWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 50px auto;
    background-image: url(${PatternBackground});
    background-repeat: no-repeat;
    background-size: fixed;
    background-position: center bottom;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    .HomeReviews__Carousel-wrapper {
        .ant-carousel .slick-slide {
            width: 100%;
            max-width: 1238px;
            height: auto;
            background: none;
            overflow: hidden;
            padding-top: 80px;
            @media (max-width: 1280px) {
                max-width: 980px;
            }
            .Carousel__Slide-wrapper {
                .Carousel__Slide-flex {
                    width: 100%;
                    display: flex;
                    flex-wrap: no-wrap;
                    align-items: center;
                    justify-content: center;
                    .Carousel__slide-button {
                        margin: px auto;
                        border: none;
                        outline: none;
                        background: none;
                        cursor: pointer;
                    }
                    .Carousel__Slide-flex--left {
                        text-align: center;
                        flex: 0 0 150px; 
                    }
                    .Carousel__Slide-flex--right {
                        flex: 0 0 150px;
                        text-align: center;
                    }
                    .Carousel__Slide-flex--middle {
                        flex: 1 1 100%;
                        .Carousel__Slide-flex__image {
                            width: 100%;
                            > img {
                                width: 95px;
                                margin: 0px auto;
                                border-radius: 50%;
                                padding-bottom: 20px;
                            }
                        }
                    }
                }
                .Carousel__Slide-content-wrapper {
                    width: 100%;
                    text-align: center;
                    .Carousel__Slide-name {
                        font-size: 24px;
                        font-weight: 500;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.13;
                        letter-spacing: 0.7px;
                        text-align: center;
                        color: #00a0df;
                        padding: 10px 0px;
                    }
                    .Carousel__Slide-separator {
                        width: 39px;
                        height: 1px;
                        background-color: #1f1f1f;
                        border: none;
                    }
                    .Carousel__Slide-text {
                        max-width: 693px;
                        width: 100%;
                        margin: 0px auto;
                        font-size: 16px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.44;
                        letter-spacing: 0.5px;
                        text-align: center;
                        color: #1f1f1f;
                        padding: 10px 0px;
                        @media (max-width: 700px) {
                            width: 80%;
                            font-size: 14px;
                        }
                    }
                    .Carousel__Slide-position {
                        opacity: 0.5;
                        font-family: Roboto;
                        font-size: 16px;
                        font-weight: normal;
                        font-style: normal;
                        font-stretch: normal;
                        line-height: 1.44;
                        letter-spacing: 0.5px;
                        text-align: center;
                        color: #1f1f1f;
                        padding: 10px 0px;
                    }
                }
            }
        }
    }
    .Carousel__dot-navigation {
        width: 100%;
        max-width: 1238px;
        text-align: center;
        .Carousel__dot-navigation__item {
            width: 12px;
            height: 12px;
            background: #fafafb;
            outline: none;
            border: 1px solid #bbdefb;
            border-radius: 50%;
            margin: 5px;
            padding: 0;
            transition: 0.4s;
            cursor: pointer;
            &.active-slide {
                background-color: #00a0df;
                border: 1px solid #00a0df;
            }
            &:hover, &:focus {
                border: 1px solid #00a0df;
                transition: 0.4s;
            }
        }
    }
`