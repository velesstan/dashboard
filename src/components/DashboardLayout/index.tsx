import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Appbar from 'components/AppBar';

export const DashboardLayout: React.FC = () => {
    return (
        <Layout>
            <Appbar />
            <Outlet />
        </Layout>
    );
};
