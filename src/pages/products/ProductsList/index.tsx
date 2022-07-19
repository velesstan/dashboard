import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Row, Space } from 'antd';
import { PlusOutlined, SyncOutlined } from '@ant-design/icons';

import { useGetProductsQuery } from 'store/features/products';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const ProductsList: React.FC = () => {
    const { data, isFetching, refetch } = useGetProductsQuery();

    return (
        <Page title='Продукты'>
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
                        <CommonTable
                            columns={columns}
                            loading={isFetching}
                            items={data}
                        />
                    </Col>
                </Row>
            </Card>
        </Page>
    );
};
