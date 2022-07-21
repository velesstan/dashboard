import React from 'react';
import { Table } from 'antd';

import { Transaction } from 'interfaces';

const { Column } = Table;

type TProps = {
    items: Transaction[];
};

export const TransactionsTable: React.FC<TProps> = props => {
    const { items } = props;

    return (
        <React.Fragment>
            <Table dataSource={items} rowKey={({ _id }) => _id}>
                <Column
                    title='Категория'
                    dataIndex={['product', 'category', 'title']}
                />
                <Column title='Код' dataIndex={['product', 'code']} />
                <Column title='Название' dataIndex={['product', 'title']} />
                <Column title='Количество' dataIndex={['quantity']} />
                <Column
                    title='Цена'
                    dataIndex={['product', 'price_wholesale']}
                />
            </Table>
        </React.Fragment>
    );
};
