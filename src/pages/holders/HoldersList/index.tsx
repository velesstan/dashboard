import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useReadHoldersQuery, useDeleteHolderMutation } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { Holder } from 'interfaces';

import columns from './columns';

export const HoldersList: React.FC = () => {
    const { data, isFetching, refetch } = useReadHoldersQuery();
    const [deleteEntity] = useDeleteHolderMutation();

    const navigate = useNavigate();

    const onCreate = (): void => {
        navigate(`create`, {});
    };

    const onEdit = (entity: Holder): void => {
        navigate(`${entity._id}/edit`, {
            state: { entity },
        });
    };

    const onDelete = (entity: Holder) => {
        deleteEntity(entity._id);
    };

    return (
        <Page title='Склады и оптовики'>
            <CommonTable
                refetch={refetch}
                items={data}
                loading={isFetching}
                columns={columns}
                onEdit={onEdit}
                onDelete={onDelete}
                onCreate={onCreate}
            />
        </Page>
    );
};
