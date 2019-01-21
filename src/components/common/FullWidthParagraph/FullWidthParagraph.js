import React from 'react';
import { FullWidthParagraphWrapper } from './styledFullWidthParagraph';

const FullWidthParagraph = (props) => (
    <FullWidthParagraphWrapper>
        <p>
            {props.children}
        </p>
    </FullWidthParagraphWrapper>
)

export default FullWidthParagraph;