import React from 'react';
import { Table } from 'antd';

import type { Transaction } from 'interfaces';

import columns from './columns';

type TProps = {
    items: Transaction[];
};

export const TransactionsTable: React.FC<TProps> = props => {
    const { items } = props;

    const hasItems = !!items.length;

    return (
        hasItems && (
            <React.Fragment>
                <Table dataSource={items} rowKey={({ _id }) => _id}>
                    {columns.map((columnProps, index) => (
                        <Table.Column key={index} {...columnProps} />
                    ))}
                </Table>
            </React.Fragment>
        )
    );
};
