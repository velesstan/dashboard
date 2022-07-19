import React from 'react';
import { Layout } from 'antd';

import styles from './styles.module.less';

const { Header } = Layout;

export const Appbar: React.FC = () => {
    return (
        <React.Fragment>
            <Header className={styles.header}></Header>
        </React.Fragment>
    );
};
export default Appbar;
