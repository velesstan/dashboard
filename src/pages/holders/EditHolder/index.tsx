import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Holder } from 'interfaces';
import { Page } from 'components/Page';
import { CommonForm } from 'components/CommonForm';
import { useUpdateHolderMutation } from 'store/features';

import renderFields from './fields';

export const EditHolder: React.FC = () => {
    const { state } = useLocation() as { state: { entity: Holder } };

    const [entity, setEntity] = useState<Holder | null>(null);

    const [updateHolder] = useUpdateHolderMutation();

    useEffect(() => {
        setEntity(state?.entity || null);
    }, [state]);

    const onSave = async (entity: Holder) => {
        if (entity._id) {
            updateHolder(entity);
        } else {
            console.log('Should create');
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
