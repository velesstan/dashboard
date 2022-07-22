import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useReadUsersQuery, useDeleteUserMutation } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { User } from 'interfaces';

import columns from './columns';

export const UsersList: React.FC = () => {
    const { data = [], isFetching, refetch } = useReadUsersQuery();
    const [deleteEntity] = useDeleteUserMutation();

    const navigate = useNavigate();

    const onCreate = (): void => {
        navigate(`create`);
    };

    const onEdit = (entity: User): void => {
        navigate(`${entity._id}/edit`, {
            state: { entity },
        });
    };

    const onDelete = ({ _id }: User): void => {
        deleteEntity(_id);
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
                onCreate={onCreate}
            />
        </Page>
    );
};
