import React from 'react';

import { useGetCategoriesQuery } from 'store/features/categories';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const CategoriesList: React.FC = () => {
    const { data, isFetching, refetch } = useGetCategoriesQuery();

    return (
        <Page title='Категории'>
            <CommonTable
                refetch={refetch}
                items={data}
                loading={isFetching}
                columns={columns}
            />
        </Page>
    );
};
