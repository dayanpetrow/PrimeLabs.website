import styled from 'styled-components';
import FooterOval from '../../../images/svgs/FooterOval.svg'

export const StyledFooter = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    margin-top: -50px;
    .Footer__content-wrapper {
        width: 100%;
        max-width: 1238px;
        padding-top: 100px;
        padding-bottom: 54px;
        background-image: url(${FooterOval});
        background-repeat: no-repeat;
        background-size: contain;
        background-position: bottom;
        .Footer__flex-grid {
            display: flex;
            justify-content: space-between;
            width: 100%;
            &__icons {
                align-self: center;
                max-width: 200px;
                align-items: right;
                padding-left: 24px;
                .Footer__flex-grid__icon {
                    width: 32px;
                    height: 32px;
                    margin: 0px 6px;
                    opacity: 0.5;
                    transition: opacity 0.5s ease;
                    &:hover {
                        opacity: 1;
                        transition: opacity 0.5s ease;
                    }
                }
            }
            .Footer__copyright {
                align-self: center;
                padding-left: 24px;
                text-align: left;
                font-size: 16px;
                font-weight: normal;
                font-style: normal;
                font-stretch: normal;
                line-height: 1.44;
                letter-spacing: 0.5px;
                color: #1f1f1f;
            }
        }
        .Footer__separator {
            width: 100%;
            max-width: 1238px;
            border: none;
            height: 2px;
            background-color: #1f1f1f;
            opacity: 0.1;
            margin: 20px 0px 34px 0px;
        }
    }
`
