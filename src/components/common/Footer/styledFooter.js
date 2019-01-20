import styled from 'styled-components';
import FooterOval from '../../../images/svgs/FooterOval.svg'

export const StyledFooter = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
    margin-top: -50px;
    .Footer__content-wrapper {
        width: 100%;
        max-width: 1280px;
        padding-top: 100px;
        padding-bottom: 54px;
        background-image: url(${FooterOval});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
        .Footer__flex-grid {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            &__logo {
                max-width: 130px;
            }
            &__navigation {
                max-width: 680px;
                > ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;
                    overflow: hidden;
                    > li {
                        display: inline-block;
                        &:not(:last-child):after {
                            content: " ";
                            height: 20px;
                            width: 2px;
                            background-color: #1f1f1f;
                            margin: 0px 5px;
                            padding: 0px 2px;
                            opacity: 0.1;
                        }
                        > a {
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
                        }
                    }
                }
            }
            &__icons {
                max-width: 200px;
                align-items: right;
                &--small {
                    width: 23px;
                    height: 23px;
                    padding: 11px 5px;
                }
                &--scrollup {
                    width: 45px;
                    height: 45px;
                    padding: 0px 23px;
                    margin-right: 10px;
                }
            }
        }
        .Footer__separator {
            width: 100%;
            max-width: 1170px;
            border: none;
            height: 2px;
            background-color: #1f1f1f;
            opacity: 0.1;
            margin: 20px 0px 34px 0px;
        }
        .Footer__copyright {
            width: 100%;
            text-align: center;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            color: #1f1f1f;
        }
    }
`
