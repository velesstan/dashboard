import React from 'react';
import { Menu, Layout } from 'antd';

import links from './links';
import styles from './styles.module.less';

const { Sider } = Layout;

type TProps = {
    onCollapse: (value: boolean) => void;
};

export const AppSidebar: React.FC<TProps> = props => {
    const { onCollapse } = props;
    return (
        <React.Fragment>
            <Sider collapsible onCollapse={onCollapse} className={styles.aside}>
                <Menu theme='dark' mode='inline' items={links} />
            </Sider>
        </React.Fragment>
    );
};
