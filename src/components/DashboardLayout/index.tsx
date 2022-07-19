import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Appbar from 'components/AppBar';
import { AppSidebar } from 'components/AppSidebar';

const { Content } = Layout;

export const DashboardLayout: React.FC = () => {
    return (
        <Layout hasSider style={{ minHeight: '100vh' }}>
            <AppSidebar />
            <Layout>
                <Appbar />
                <Content style={{ padding: 24 }}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
