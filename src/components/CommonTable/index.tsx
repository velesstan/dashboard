import React from 'react';
import { Table } from 'antd';

import { DataColumn, BaseEntity } from 'interfaces';

import defaultColumns from './defaultColumns';

const { Column } = Table;

type TProps<T> = {
    readonly items: Array<Readonly<BaseEntity & T>>;
    readonly columns: Array<DataColumn<BaseEntity & T>>;
    readonly loading: boolean;
};

export const CommonTable = <T,>(props: TProps<T>) => {
    const { items, columns, loading } = props;

    return (
        <React.Fragment>
            <Table
                rowKey={item => item._id}
                loading={loading}
                dataSource={items}
            >
                {columns.concat(defaultColumns).map((columnProps, index) => (
                    <Column key={index} {...columnProps} />
                ))}
            </Table>
        </React.Fragment>
    );
};
