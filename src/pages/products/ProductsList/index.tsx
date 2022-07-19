import React from 'react';

import { useGetProductsQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const ProductsList: React.FC = () => {
    const { data, isFetching, refetch } = useGetProductsQuery();

    return (
        <Page title='Продукты'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
            />
        </Page>
    );
};
