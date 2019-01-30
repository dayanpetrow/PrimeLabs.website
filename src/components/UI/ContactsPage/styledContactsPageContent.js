import styled from 'styled-components';
import TeamOval from '../../../images/svgs/TeamOval.svg'
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';

const { TextArea } = Input;
const { Option } = Select;

export const StyledContactsPageContentWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    padding-top: 108px;
    background-image: url(${TeamOval});
    background-repeat: no-repeat;
    background-position: center 90%;
    @media (max-width: 1280px) {
        max-width: 960px;
    }
    .ContactsPage__button-container {
        padding: 20px 0px;
    }
    .ContactsPage__error-message {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #e47f8c;
        padding-left: 20px;
    }
    .ContactsPage__flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-top: 100px;
        align-items: center;
        &--left-column {
            width: 100%;
            max-width: 573px;
            @media (max-width: 1280px) {
                max-width: 460px;
            }
            > img {
                @media (max-width: 1280px) {
                    max-width: 460px;
                }
                @media (max-width: 600px) {
                    display: none;
                }
            }
        }
        &--right-column {
            width: 100%;
            max-width: 573px;
            @media (max-width: 1280px) {
                max-width: 460px;
            }
            @media (max-width: 600px) {
                padding: 0px 30px;
            }
        }
    }
`

export const StyledInput = styled(Input)`
    width: 100%;
    height: 45px;
    margin: 12px 0;
    border-radius: 35px;
    padding-left: 20px;
    transition: all 0.4s ease;
    border: 1px solid #00a0df;
    color: #1f1f1f;
    &:focus {
        border: 1px solid #00a0df;
    }
    &::placeholder {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #8f8f8f;
    }
    &.error {
        border: 1px solid #d0021b;
    }
`

export const StyledSelect = styled(Select)`
    width: 100%;
    margin: 12px 0;
    > div {
        height: 45px;
        border-radius: 35px;
        padding-left: 10px;
        border: 1px solid #00a0df;
        color: #1f1f1f;
        &:focus {
            border: 1px solid #00a0df;
        }
    }
    &.error {
        > div {
            border: 1px solid #d0021b;
        }
    }
    .ant-select-selection-selected-value {
        line-height: 43px;
    }
    .ant-select-arrow {
        margin-right: 10px;
    }
    .ant-select-selection__rendered {
        line-height: 43px;
    }
    .ant-select-selection__placeholder {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 0.5px;
        color: #8f8f8f;
    }
`

export const StyledTextArea = styled(TextArea)`
    width: 100%;
    height: 131px !important;
    margin: 12px 0 !important;
    border-radius: 25px !important;
    padding: 10px 20px!important;
    border: 1px solid #00a0df;
    color: #1f1f1f;
    &.error {
        border: 1px solid #d0021b;
    }
    &:focus {
        border: 1px solid #00a0df;
    }
    &::placeholder {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #8f8f8f;
    }
`

export const StyledOption = styled(Option)``