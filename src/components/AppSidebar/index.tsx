import React from 'react';
import { Menu, Layout } from 'antd';

import links from './links';

const { Sider } = Layout;

export const AppSidebar: React.FC = () => {
    return (
        <React.Fragment>
            <Sider collapsible>
                <Menu theme='dark' mode='inline' items={links} />
            </Sider>
        </React.Fragment>
    );
};
