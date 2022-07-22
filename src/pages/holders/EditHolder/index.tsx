import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Holder } from 'interfaces';
import { Page } from 'components/Page';
import { CommonForm } from 'components/CommonForm';
import {
    useCreateHolderMutation,
    useUpdateHolderMutation,
} from 'store/features';

import renderFields from './fields';

export const EditHolder: React.FC = () => {
    const { state } = useLocation() as { state: { entity: Holder } };

    const [entity, setEntity] = useState<Holder | null>(null);

    const [updateHolder] = useUpdateHolderMutation();
    const [createHolder] = useCreateHolderMutation();

    useEffect(() => {
        setEntity(state?.entity || null);
    }, [state]);

    const onSave = (entity: Holder): void => {
        if (entity._id) {
            updateHolder(entity);
        } else {
            createHolder(entity);
        }
    };

    return (
        <Page title='Склады и оптовики'>
            <CommonForm
                entity={entity}
                onSave={onSave}
                fields={renderFields()}
            />
        </Page>
    );
};
