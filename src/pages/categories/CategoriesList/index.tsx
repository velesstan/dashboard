import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    useDeleteCategoryMutation,
    useGetCategoriesQuery,
} from 'store/features';
import { Page } from 'components/Page';
import { CommonTable } from 'components/CommonTable';
import { Category } from 'interfaces';

import columns from './columns';

export const CategoriesList: React.FC = () => {
    const { data, isFetching, refetch } = useGetCategoriesQuery();

    const [deleteCategory] = useDeleteCategoryMutation();

    const navigate = useNavigate();

    const onCreate = (): void => {
        navigate(`create`, {});
    };

    const onEdit = (entity: Category): void => {
        navigate(`${entity._id}/edit`, {
            state: { entity },
        });
    };

    const onDelete = (entity: Category) => {
        deleteCategory(entity._id);
    };

    return (
        <Page title='Категории'>
            <CommonTable
                refetch={refetch}
                items={data}
                loading={isFetching}
                columns={columns}
                onCreate={onCreate}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </Page>
    );
};
