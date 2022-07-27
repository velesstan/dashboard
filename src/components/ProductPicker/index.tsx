import React, { Fragment, useEffect, useState } from 'react';

import { CommonTable } from 'components/CommonTable';
import { Product } from 'interfaces';

import AddProductModal from './modal';

type TProps = {
    readonly title: string;
    readonly items: Array<{ product: Product; quantity: number }>;
    readonly onChange: (
        items: Array<{ product: Product; quantity: number }>
    ) => void;
};

export const ProductPicker: React.FC<TProps> = props => {
    const { title, items, onChange } = props;

    const [dataSource, setDataSource] =
        useState<Array<{ product: Product; quantity: number }>>(items);

    useEffect(() => {
        setDataSource(items);
    }, [items]);

    const onRowRelete = (entity: Product) => {
        onChange(
            dataSource.filter(({ product }) => entity._id !== product._id)
        );
    };

    const onProductAdded = (item: { product: Product; quantity: number }) => {
        onChange([...dataSource, item]);
    };

    return (
        <Fragment>
            <h2>{title}</h2>
            <AddProductModal onAdd={onProductAdded} />
            <CommonTable
                columns={columns}
                items={dataSource.map(({ product, quantity }) => ({
                    ...product,
                    quantity,
                }))}
                hasDefaultColumns={false}
                onDelete={onRowRelete}
            />
        </Fragment>
    );
};

const columns = [
    {
        title: 'Категория',
        dataIndex: ['category', 'title'],
    },
    {
        title: 'Код',
        dataIndex: ['code'],
    },
    {
        title: 'Название',
        dataIndex: ['title'],
    },
    {
        title: 'Количество',
        dataIndex: ['quantity'],
    },
    {
        title: 'Цена',
        dataIndex: ['price_retail'],
    },
];
