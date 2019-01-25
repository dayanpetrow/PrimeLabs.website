import styled from 'styled-components';

export const StyledNavigation = styled.div`
    #NavigationWrapper {
        width: 100%;
        transition: 0.4s;
        position: fixed;
        top: 0;
        z-index: 5; 
        padding: 34px 0px 34px 0px;
        .Navigation__container {
            width: 100%;
            max-width: 1238px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            margin: 0px auto;
            .Header__logo {
                display: flex;
                justify-content: center;
                max-width: 164px;
            }
            .Header__navigation {
                max-width: 1030px;
                margin-left: auto;
                margin-right: 75px;
                > ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    > li {
                        display: inline-block;
                        &:not(:last-child):after {
                            content: " ";
                            height: 20px;
                            width: 2px;
                            background-color: #1f1f1f;
                            margin: 0px 5px;
                            padding: 0px 1px;
                            opacity: 0.1;
                        }
                        .Navigaton__link {
                            padding: 6px 10px;
                            font-size: 16px;
                            font-weight: normal;
                            font-style: normal;
                            font-stretch: normal;
                            line-height: 1.44;
                            letter-spacing: 0.5px;
                            text-align: center;
                            color: #1f1f1f;
                            text-decoration: none;
                            position: relative;
                            &:before {
                                content: "";
                                position: absolute;
                                width: 100%;
                                height: 2px;
                                bottom: -7px;
                                left: 0px;
                                background-color: #00a0df;
                                visibility: hidden;
                                -webkit-transform: scaleX(0);
                                transform: scaleX(0);
                                -webkit-transition: all 0.3s ease-in-out 0s;
                                transition: all 0.3s ease-in-out 0s;
                            }
                            &:hover:before, &.active:before {
                                visibility: visible;
                                -webkit-transform: scaleX(1);
                                transform: scaleX(1);
                            }
                        }
                    }
                }
            }
            .Header__contacts {
                display: flex;
                align-items: right;
                max-width: 160px;
            }
        }
    }
`