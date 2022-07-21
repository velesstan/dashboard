import React from 'react';
import { Button, Col, Row, Space, Table } from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import { DataColumn, BaseEntity } from 'interfaces';

import defaultColumns from './defaultColumns';
import renderDefaultActions from './defaultActions';

const { Column } = Table;

type TProps<T extends BaseEntity> = {
    readonly items: Array<T>;
    readonly columns: Array<Omit<DataColumn<T>, 'dataIndex'>>;
    readonly hasDefaultColumns?: boolean;
    readonly loading: boolean;
    readonly onEdit?: (entity: T) => void;
    readonly onDelete?: (entity: T) => void;
    readonly refetch: () => void;
};

export const CommonTable = <T extends BaseEntity>(props: TProps<T>) => {
    const {
        hasDefaultColumns = true,
        items,
        columns,
        refetch,
        loading,
        onEdit,
        onDelete,
    } = props;

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
                            .concat(hasDefaultColumns ? defaultColumns : [])
                            .concat(
                                renderDefaultActions({
                                    onEdit,
                                    onDelete,
                                })
                            )
                            .map((columnProps, index) => (
                                <Column key={index} {...columnProps} />
                            ))}
                    </Table>
                </Col>
            </Row>
        </React.Fragment>
    );
};
