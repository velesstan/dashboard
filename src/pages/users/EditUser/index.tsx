import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Page } from 'components/Page';
import { User } from 'interfaces';
import {
    useCreateUserMutation,
    useGetRolesQuery,
    useUpdateUserMutation,
} from 'store/features';
import { CommonForm } from 'components/CommonForm';

import renderFields from './fields';

export const EditUser: React.FC = () => {
    const { state } = useLocation() as { state: { entity: User } };

    const roles = useGetRolesQuery().data || [];
    const [updatedUser] = useUpdateUserMutation();
    const [createUser] = useCreateUserMutation();

    const [entity, setEntity] = useState<User | null>(null);

    useEffect(() => {
        setEntity(state?.entity || null);
    }, [state]);

    const onSave = (entity: User): void => {
        if (entity._id) {
            updatedUser(entity);
        } else {
            createUser(entity);
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
