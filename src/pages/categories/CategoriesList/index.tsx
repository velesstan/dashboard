import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Space } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';

import { useGetCategoriesQuery } from 'store/features/categories';
import { Page } from 'components/Page';

import { CategoriesTable } from './components/CategoriesTable';

export const CategoriesList: React.FC = () => {
    const { data, isFetching, refetch } = useGetCategoriesQuery();

    return (
        <Page title='Категории'>
            <Card>
                <Row>
                    <Col flex={1}></Col>
                    <Col>
                        <Space>
                            <Link to='#'>
                                <Button icon={<PlusOutlined />}>Создать</Button>
                            </Link>
                            <Button
                                loading={isFetching}
                                onClick={() => refetch()}
                                type='primary'
                                icon={<SyncOutlined />}
                            >
                                Обновить
                            </Button>
                        </Space>
                    </Col>
                </Row>
                <Row style={{ marginTop: 24 }}>
                    <Col sm={24}>
                        <CategoriesTable items={data} loading={isFetching} />
                    </Col>
                </Row>
            </Card>
        </Page>
    );
};
