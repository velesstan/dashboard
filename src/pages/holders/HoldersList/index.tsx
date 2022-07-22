import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useDeleteHolderMutation, useGetHoldersQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { Holder } from 'interfaces';

import columns from './columns';

export const HoldersList: React.FC = () => {
    const { data, isFetching, refetch } = useGetHoldersQuery();
    const [deleteHolder] = useDeleteHolderMutation();

    const navigate = useNavigate();

    const onCreate = (): void => {
        navigate(`create`, {});
    };

    const onEdit = (holder: Holder): void => {
        navigate(`${holder._id}/edit`, {
            state: { entity: holder },
        });
    };

    const onDelete = (entity: Holder) => {
        deleteHolder(entity._id);
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
