import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
    useReadProductsQuery,
    useDeleteProductMutation,
    useUpdateProductMutation,
} from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { Product } from 'interfaces';

import columns from './columns';

export const ProductsList: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<Record<string, unknown>>();

    const { data, isFetching, refetch } = useReadProductsQuery(searchQuery);
    const [deleteEntity] = useDeleteProductMutation();
    const [updateEntity] = useUpdateProductMutation();

    const navigate = useNavigate();

    const onCreate = (): void => {
        navigate(`create`);
    };

    const onEdit = (entity: Product): void => {
        navigate(`${entity._id}/edit`, {
            state: { entity },
        });
    };

    const onDelete = ({ _id }: Product): void => {
        deleteEntity(_id);
    };

    const handleToggle = ({ _id, enabled }: Product): void => {
        updateEntity({ _id, enabled: !enabled });
    };

    return (
        <Page title='Продукты'>
            <CommonTable
                refetch={refetch}
                columns={columns}
                loading={isFetching}
                items={data}
                onCreate={onCreate}
                onEdit={onEdit}
                onDelete={onDelete}
                onToggle={handleToggle}
            />
        </Page>
    );
};
