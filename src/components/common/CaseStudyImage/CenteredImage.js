import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Zoom';

const StyledImageWrapper = styled.div`
    width: 100%;
    max-width: 1238px;
    margin: 0px auto;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 1280px) {
        max-width: 980px;
    }
    > img {
        width: 100%;
        max-width: ${props => props.maxWidth};
        margin: ${props => props.margin || "64px 0px"};
        padding: ${props => props.padding};
        @media (max-width: ${props => props.maxWidth}) {
            width: 100%;
            padding: 15px;
            margin: 15px 0px;
        }
    }
`

const CenteredImage = ({img, maxWidth, alt, padding, margin}) => (
    <Zoom clear>
        <StyledImageWrapper maxWidth={maxWidth} padding={padding} margin={margin} >
            <img src={img} alt={alt} />
        </StyledImageWrapper>
    </Zoom>
)



export default CenteredImage;