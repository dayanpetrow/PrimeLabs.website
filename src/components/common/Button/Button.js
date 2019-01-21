import React from 'react';
import { StyledButton } from './styledButton';

const PrimeButton = ({children, width, onClick, theme}) => {
    return (
        <StyledButton onClick={onClick} config={theme} width={width}>{children}</StyledButton>
    )
}

export default PrimeButton;