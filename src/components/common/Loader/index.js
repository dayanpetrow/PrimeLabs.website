import React from 'react';
import { StyledLoaderWrapper } from './styledLoader';
import Icon from 'antd/lib/icon';

const Loader = () => (
    <StyledLoaderWrapper>
        <Icon type="loading" className="NewsPage__Loader" />
    </StyledLoaderWrapper>
)

export default Loader;