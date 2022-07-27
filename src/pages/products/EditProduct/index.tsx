import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Select } from 'antd';

import { Page } from 'components/Page';
import { Product } from 'interfaces';
import {
    useCreateProductMutation,
    useUpdateProductMutation,
    useReadCategoriesQuery,
} from 'store/features';
import { CommonForm } from 'components/CommonForm';
import { ProductPicker } from 'components/ProductPicker';
import { useAppDispatch } from 'store';
import { showNotification } from 'store/features/notifications/slice';

export const EditProduct: React.FC = () => {
    const { state } = useLocation() as { state: { entity: Product } };

    const categories = useReadCategoriesQuery().data || [];
    const [dependencies, setDependencies] = useState([]);

    const [createEntity] = useCreateProductMutation();
    const [updateEntity] = useUpdateProductMutation();

    const dispatch = useAppDispatch();

    const [entity, setEntity] = useState<Product | null>(null);

    useEffect(() => {
        setEntity(state?.entity || null);
        setDependencies(state?.entity.requires || []);
    }, [state]);

    const onSave = (entity: Product): void => {
        entity = Object.assign(entity, { requires: dependencies });

        if (entity._id) {
            updateEntity({
                ...entity,
                requires: dependencies.map(({ quantity, product }) => ({
                    quantity,
                    product,
                })),
            }).then(() => {
                dispatch(
                    showNotification({
                        message: 'Успешно',
                        description: 'Продукт успешно обновлён',
                    })
                );
            });
        } else {
            createEntity(entity);
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
                        label: 'Код',
                        name: 'code',
                    },
                    {
                        label: 'СИ',
                        name: 'unit',
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
            >
                <ProductPicker
                    title='Зависимости'
                    items={dependencies}
                    onChange={setDependencies}
                />
            </CommonForm>
        </Page>
    );
};
