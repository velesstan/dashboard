import React from 'react';
import { Button, Col, Row, Space, Table } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import { DataColumn, BaseEntity } from 'interfaces';

import defaultColumns from './defaultColumns';

const { Column } = Table;

type TProps<T> = {
    readonly items: Array<Readonly<BaseEntity & T>>;
    readonly columns: Array<DataColumn<BaseEntity & T>>;
    readonly loading: boolean;
    readonly refetch: () => void;
};

export const CommonTable = <T,>(props: TProps<T>) => {
    const { items, columns, refetch, loading } = props;

    return (
        <React.Fragment>
            <Row gutter={[24, 24]} justify='end'>
                <Col>
                    <Space>
                        <Button
                            icon={<SyncOutlined />}
                            loading={loading}
                            onClick={refetch}
                            type='primary'
                        >
                            Обновить
                        </Button>
                    </Space>
                </Col>
                <Col span={24}>
                    <Table
                        rowKey={item => item._id}
                        loading={loading}
                        dataSource={items}
                    >
                        {columns
                            .concat(defaultColumns)
                            .map((columnProps, index) => (
                                <Column key={index} {...columnProps} />
                            ))}
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
    );
};
