import React from 'react';

import { useGetUsersQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';

import columns from './columns';

export const UsersList: React.FC = () => {
    const { data = [], isFetching, refetch } = useGetUsersQuery();

    return (
        <Page title='Пользователи'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
                hasDefaultColumns={false}
                onEdit={value => {
                    void console.log(value);
                }}
                onDelete={value => {
                    void console.log(value);
                }}
            />
        </Page>
    );
};
