import React from 'react';

import { useGetBalancesQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const BalancesList: React.FC = () => {
    const { data, isFetching, refetch } = useGetBalancesQuery();

    return (
        <Page title='Накладные'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
            />
        </Page>
    );
};
