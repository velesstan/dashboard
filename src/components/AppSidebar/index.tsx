import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { MenuProps } from 'rc-menu';

const { Sider } = Layout;

const items: Array<Required<MenuProps>['items'][number]> = [
    {
        label: <Link to='/dashboard'>Главная</Link>,
        key: 'main',
    },
];

export const AppSidebar: React.FC = () => {
    return (
        <React.Fragment>
            <Sider collapsible>
                <Menu theme='dark' mode='inline' items={items} />
            </Sider>
        </React.Fragment>
    );
};
