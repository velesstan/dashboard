import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Page } from 'components/Page';
import { Product } from 'interfaces';
import {
    useCreateProductMutation,
    useUpdateProductMutation,
} from 'store/features';
import { CommonForm } from 'components/CommonForm';

export const EditProduct: React.FC = () => {
    const { state } = useLocation() as { state: { entity: Product } };

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
            <CommonForm entity={entity} onSave={onSave} />
        </Page>
    );
};
