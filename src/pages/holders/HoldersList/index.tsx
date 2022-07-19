import React from 'react';

import { useGetHoldersQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const HoldersList: React.FC = () => {
    const { data, isFetching, refetch } = useGetHoldersQuery();

    return (
        <Page title='Склады и оптовики'>
            <CommonTable
                refetch={refetch}
                items={data}
                loading={isFetching}
                columns={columns}
            />
        </Page>
    );
};
