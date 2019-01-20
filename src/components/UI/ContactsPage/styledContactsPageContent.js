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
    padding-top: 30px;
    background-image: url(${TeamOval});
    background-repeat: no-repeat;
    background-position: center 90%;
    .ContactsPage__flex {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        padding-top: 100px;
        align-items: center;
        &--left-column {
            width: 100%;
            max-width: 573px;
        }
        &--right-column {
            width: 100%;
            max-width: 573px;
        }
    }
`

export const StyledInput = styled(Input)`
    width: 100%;
    height: 45px;
    margin: 12px 0;
    border-radius: 35px;
    padding-left: 20px;
    border: 1px solid #00a0df;
    &::placeholder {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
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
        color: #1f1f1f;
    }
`

export const StyledTextArea = styled(TextArea)`
    width: 100%;
    height: 131px !important;
    margin: 12px 0 !important;
    border-radius: 25px !important;
    padding: 10px 20px!important;
    border: 1px solid #00a0df;
    &::placeholder {
        font-size: 16px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.44;
        letter-spacing: 0.5px;
        color: #1f1f1f;
    }
`

export const StyledOption = styled(Option)``