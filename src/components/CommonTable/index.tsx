import React from 'react';
import { Button, Col, Row, Space, Table } from 'antd';
import { PlusOutlined, PrinterFilled, SyncOutlined } from '@ant-design/icons';
import type { ExpandableConfig } from 'antd/lib/table/interface';

import type { DataColumn, BaseEntity } from 'interfaces';

import defaultColumns from './defaultColumns';
import renderDefaultActions from './defaultActions';

const { Column } = Table;

type TProps<T extends BaseEntity> = {
    readonly onEdit?: (entity: T) => void;
    readonly onDelete?: (entity: T) => void;
    readonly onCreate?: () => void;
    readonly onToggle?: (entity: T) => void;
    readonly onExport?: () => void;
    readonly refetch: () => void;
    readonly items: Array<T>;
    readonly columns: Array<Omit<DataColumn<T>, 'dataIndex'>>;
    readonly hasDefaultColumns?: boolean;
    readonly loading: boolean;
    readonly expandedRowRenderer?: ExpandableConfig<T>;

    readonly children?: React.ReactElement;
};

export const CommonTable = <T extends BaseEntity>(props: TProps<T>) => {
    const {
        onEdit,
        onDelete,
        onCreate,
        onToggle,
        onExport,
        refetch,
        items,
        children,
        columns,
        loading,
        expandedRowRenderer,
        hasDefaultColumns = true,
    } = props;

    return (
        <React.Fragment>
            <Row gutter={[24, 24]} justify={children ? 'space-between' : 'end'}>
                <Col flex={1}>{children}</Col>
                <Col>
                    <Space>
                        {onCreate && (
                            <Button
                                onClick={() => onCreate()}
                                icon={<PlusOutlined />}
                            >
                                Создать
                            </Button>
                        )}
                        {onExport && (
                            <Button
                                onClick={() => onExport()}
                                icon={<PrinterFilled />}
                            >
                                Экспорт
                            </Button>
                        )}
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
                        expandable={expandedRowRenderer}
                    >
                        {columns
                            .concat(hasDefaultColumns ? defaultColumns : [])
                            .concat(
                                renderDefaultActions({
                                    onEdit,
                                    onDelete,
                                    onToggle,
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
