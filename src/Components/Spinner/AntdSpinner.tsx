import React from 'react';
import { Space, Spin } from 'antd';
import { AntdSpinnerStyled } from './Style';

const AntdSpinnerPrivite: React.FC = () => (
    <AntdSpinnerStyled>
        <Space size="middle">
            <Spin size="large" />
        </Space>
    </AntdSpinnerStyled>

);

export default AntdSpinnerPrivite;