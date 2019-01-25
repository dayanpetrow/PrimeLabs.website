import styled from 'styled-components';
import Button from 'antd/lib/button';

export const StyledButton = styled(Button)`
    width: ${props => props.width};
    height: 45px;
    font-size: ${props => props.config.fontSize || "15px"};
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.25;
    letter-spacing: 1.1px;
    text-align: center;
    color: #ffffff;
    text-transform: ${props => props.config.transform || "uppercase"};
    border: ${props => props.config.border};
    border-radius: 35px;
    outline: none;
    background-color: ${props => props.config.background};
    color: ${props => props.config.color || "white"};
    &:hover, &:focus {
        box-shadow: ${props => props.config.shadow};
        transition: all 0.5s ease;
        border: ${props => props.config.hoverBorder};
        background-color: ${props => props.config.background};
        color: ${props => props.config.color || "white"};
    }
`