import React from 'react';
import styled from 'styled-components';

const StyledImageWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    > img {
        width: 100%;
        max-width: ${props => props.maxWidth};
        margin: ${props => props.margin || "64px 0px"};
        padding: ${props => props.padding};
    }
`

const CenteredImage = ({img, maxWidth, alt, padding, margin}) => (
    <StyledImageWrapper maxWidth={maxWidth} padding={padding} margin={margin} >
        <img src={img} alt={alt} />
    </StyledImageWrapper>
)



export default CenteredImage;