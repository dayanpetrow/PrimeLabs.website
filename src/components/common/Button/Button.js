import React from 'react';
import { StyledButton } from './styledButton';

const PrimeButton = ({children, width, onClick, theme, disabled}) => {
    return (
        <StyledButton onClick={onClick} config={theme} width={width} disabled={disabled}>{children}</StyledButton>
    )
}

export default PrimeButton;