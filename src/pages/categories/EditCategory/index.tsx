import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Category } from 'interfaces';
import { Page } from 'components/Page';
import { CommonForm } from 'components/CommonForm';
import {
    useCreateCategoryMutation,
    useUpdateCategoryMutation,
} from 'store/features';

import renderFields from './fields';

export const EditCategory: React.FC = () => {
    const { state } = useLocation() as { state: { entity: Category } };

    const [entity, setEntity] = useState<Category | null>(null);

    const [createEntity] = useCreateCategoryMutation();
    const [updateEntity] = useUpdateCategoryMutation();

    useEffect(() => {
        setEntity(state?.entity || null);
    }, [state]);

    const onSave = (entity: Category): void => {
        if (entity._id) {
            updateEntity(entity);
        } else {
            createEntity(entity);
        }
    };

    return (
        <Page title='Категории'>
            <CommonForm
                entity={entity}
                onSave={onSave}
                fields={renderFields()}
            />
        </Page>
    );
};
