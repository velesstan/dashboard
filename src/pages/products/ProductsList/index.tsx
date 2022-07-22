import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useReadProductsQuery, useDeleteProductMutation } from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { Product } from 'interfaces';

import columns from './columns';

export const ProductsList: React.FC = () => {
    const { data, isFetching, refetch } = useReadProductsQuery();
    const [deleteEntity] = useDeleteProductMutation();

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
            />
        </Page>
    );
};
