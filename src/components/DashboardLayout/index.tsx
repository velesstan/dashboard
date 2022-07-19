import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';

import Appbar from 'components/AppBar';
import { AppSidebar } from 'components/AppSidebar';

import styles from './styles.module.less';

const { Content } = Layout;

export const DashboardLayout: React.FC = () => {
    const [isCollapsed, setCollapsed] = useState<boolean>(false);

    return (
        <Layout hasSider style={{ minHeight: '100vh' }}>
            <AppSidebar onCollapse={setCollapsed} />
            <Layout
                className={styles.layout}
                style={{
                    marginLeft: isCollapsed ? 80 : 200,
                }}
            >
                <Appbar />
                <Content className={styles.content}>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
