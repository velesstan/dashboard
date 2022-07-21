import React from 'react';

import { useGetWaybillsQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';
import { TransactionsTable } from './transactions.table';

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
                expandedRowRenderer={{
                    expandedRowRender: ({ transactions }) => (
                        <React.Fragment>
                            <TransactionsTable items={transactions} />
                        </React.Fragment>
                    ),
                }}
            />
        </Page>
    );
};
