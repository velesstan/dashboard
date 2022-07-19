import React from 'react';

import { useGetWaybillsQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const WaybillsList: React.FC = () => {
    const { data, isFetching, refetch } = useGetWaybillsQuery();

    return (
        <Page title='Накладные'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
                hasDefaultColumns={false}
            />
        </Page>
    );
};
