import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetHoldersQuery } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { Holder } from 'interfaces';

import columns from './columns';

export const HoldersList: React.FC = () => {
    const { data, isFetching, refetch } = useGetHoldersQuery();

    const navigate = useNavigate();

    const onEdit = (holder: Holder): void => {
        navigate(`${holder._id}/edit`, {
            state: { entity: holder },
        });
    };

    return (
        <Page title='Склады и оптовики'>
            <CommonTable
                refetch={refetch}
                items={data}
                loading={isFetching}
                columns={columns}
                onEdit={onEdit}
            />
        </Page>
    );
};
