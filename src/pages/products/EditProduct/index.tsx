import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Select } from 'antd';

import { Page } from 'components/Page';
import { Product } from 'interfaces';
import {
    useCreateProductMutation,
    useGetCategoriesQuery,
    useUpdateProductMutation,
} from 'store/features';
import { CommonForm } from 'components/CommonForm';

export const EditProduct: React.FC = () => {
    const { state } = useLocation() as { state: { entity: Product } };

    const categories = useGetCategoriesQuery().data || [];

    const [createProduct] = useCreateProductMutation();
    const [updateProduct] = useUpdateProductMutation();

    const [entity, setEntity] = useState<Product | null>(null);

    useEffect(() => {
        setEntity(state?.entity || null);
    }, [state]);

    const onSave = (entity: Product): void => {
        if (entity._id) {
            updateProduct(entity);
        } else {
            createProduct(entity);
        }
    };

    return (
        <Page title='Продукты'>
            <CommonForm
                entity={entity}
                onSave={onSave}
                transformEntity={entity => ({
                    ...entity,
                    category: entity?.category?._id,
                })}
                fields={[
                    {
                        label: 'Категория',
                        name: 'category',
                        component: (
                            <Select
                                options={categories.map(category => ({
                                    label: category.title,
                                    value: category._id,
                                }))}
                            />
                        ),
                    },
                    {
                        label: 'СИ',
                        name: 'unit',
                    },
                    {
                        label: 'Код',
                        name: 'code',
                    },
                    {
                        label: 'Название',
                        name: 'title',
                    },
                    {
                        label: 'Цена розн.',
                        name: 'price_retail',
                    },
                    {
                        label: 'Цена опт.',
                        name: 'price_wholesale',
                    },
                ]}
            />
        </Page>
    );
};
