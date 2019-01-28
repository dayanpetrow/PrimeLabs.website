import styled from 'styled-components';
import TeamOval from '../../../images/svgs/TeamOval.svg'

export const StyledTeamPageContentWrapper = styled.div`
    width: 100%;
    max-width: 1280px;
    margin: 0px auto;
    background-image: url(${TeamOval});
    background-repeat: no-repeat;
    background-position: center 34%;
    padding-top: 108px;
    @media (max-width: 1280px) {
        max-width: 960px;
    }
`

export const StyledTeamGrid = styled.div`
    margin: 0px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .TeamGrid__item {
        padding: 15px 0;
        margin: 40px 20px 40px 20px;
        flex: 1;
        max-width: 335px;
        min-width: 300px;
        min-height: 300px;
        max-height: 400px;
        overflow: hidden;
        text-align: center;
        justify-content: center;
        align-items: center;
        border-radius: 15px;
        @media (max-width: 1280px) {
            max-width: 300px;
            margin: 30px 10px;
        }
        &:hover {
            transition: all 0.5s ease;
            box-shadow: 0 7px 25px 0 rgba(49, 114, 253, 0.2);
            transform: translateY(-5px);
        }
        
        &__photo-wrapper {
            width: 100%;
            > img {
                width: 175px;
                height: 175px;
                border-radius: 50%;
                margin: 0px auto;
            }
        }
        &__name {
            width: 100%;
            font-size: 24px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.13;
            letter-spacing: 0.7px;
            text-align: center;
            color: #1565c0;
            padding: 26px 0px 7px 0px;
        }
        &__position {
            opacity: 0.5;
            width: 100%;
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            text-align: center;
            color: #1f1f1f;
            padding-bottom: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            .TeamGrid__item__Linkedin {
                margin-left: 5px;
                a >
                    > img {
                        height: 18px;
                        width: 18px;
                    }
            }
        }
        &__separator {
            width: 39px;
            height: 1px;
            opacity: 0.5;
            background-color: #1f1f1f;
            border: none;
        }
        &__bio {
            font-size: 16px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.44;
            letter-spacing: 0.5px;
            text-align: center;
            color: #1f1f1f;
            max-width: 337px;
            padding: 5px 15px; 
        }
    }
`

export const StyledTeamText = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0 auto;
    @media (max-width: 1280px) {
        max-width: 960px;
    }
    .TeamPage__text-wrapper {
        width: 100%;
        max-width: 1001px;
        margin: 58px auto 50px auto;
        @media (max-width: 1280px) {
            max-width: 900px;
            text-align: center;
        }
        > .TeamPage__paragraph {
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

