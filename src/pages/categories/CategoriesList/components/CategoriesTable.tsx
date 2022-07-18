import React, { Fragment } from 'react';
import dayjs from 'dayjs';
import { Table } from 'antd';

import type { Category } from 'store/features/categories';

const { Column } = Table;

type TProps = {
    items: Category[];
    loading: boolean;
};

export const CategoriesTable: React.FC<TProps> = props => {
    const { items, loading } = props;

    return (
        <Fragment>
            <Table
                loading={loading}
                dataSource={items}
                rowKey={category => category._id}
            >
                <Column title='Название' dataIndex='title' />
                <Column title='Приоритет' dataIndex='priority' />
                <Column
                    title='Создано'
                    render={category =>
                        dayjs(category.createdAt).format('DD/MM/YYYY')
                    }
                />
                <Column
                    title='Обновлено'
                    render={category =>
                        dayjs(category.updatedAt).format('DD/MM/YYYY')
                    }
                />
            </Table>
        </Fragment>
    );
};
