import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Page } from 'components/Page';
import { User } from 'interfaces';
import {
    useCreateUserMutation,
    useUpdateUserMutation,
    useReadRolesQuery,
} from 'store/features';
import { CommonForm } from 'components/CommonForm';

import renderFields from './fields';

export const EditUser: React.FC = () => {
    const { state } = useLocation() as { state: { entity: User } };

    const roles = useReadRolesQuery().data || [];

    const [createEntity] = useCreateUserMutation();
    const [updateEntity] = useUpdateUserMutation();

    const [entity, setEntity] = useState<User | null>(null);

    useEffect(() => {
        setEntity(state?.entity || null);
    }, [state]);

    const onSave = (entity: User): void => {
        if (entity._id) {
            updateEntity(entity);
        } else {
            createEntity(entity);
        }
    };

    return (
        <Page title='Пользователи'>
            <CommonForm
                entity={entity}
                onSave={onSave}
                transformEntity={entity => ({
                    ...entity,
                    role: entity?.role?._id,
                })}
                fields={renderFields({ roles })}
            />
        </Page>
    );
};
