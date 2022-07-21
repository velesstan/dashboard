import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetUsersQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { User } from 'interfaces';

import columns from './columns';

export const UsersList: React.FC = () => {
    const { data = [], isFetching, refetch } = useGetUsersQuery();

    const navigate = useNavigate();

    const onEdit = (user: User): void => {
        navigate(`${user._id}/edit`, {
            state: { user },
        });
    };

    const onDelete = ({ _id }: User): void => {
        void 0;
    };

    return (
        <Page title='Пользователи'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
                hasDefaultColumns={false}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </Page>
    );
};
