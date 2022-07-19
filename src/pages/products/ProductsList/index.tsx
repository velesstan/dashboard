import React from 'react';

import { useGetProductsQuery } from 'store/features/products';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const ProductsList: React.FC = () => {
    const { data, isFetching, refetch } = useGetProductsQuery();

    return (
        <Page title='Продукты'>
            <CommonTable columns={columns} loading={isFetching} items={data} />
        </Page>
    );
};
