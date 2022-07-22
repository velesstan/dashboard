import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Page } from 'components/Page';
import { User } from 'interfaces';
import { useGetRolesQuery, useUpdateUserMutation } from 'store/features';
import { CommonForm } from 'components/CommonForm';

import renderFields from './fields';

export const EditUser: React.FC = () => {
    const { id } = useParams();
    const { state } = useLocation() as { state: { user: User } };

    const roles = useGetRolesQuery().data || [];
    const [updatedUser] = useUpdateUserMutation();

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(state?.user || null);
    }, [state]);

    const onSave = async (user: User) => {
        if (id) {
            await updatedUser(user);
        } else {
            console.log('Should create');
        }
    };

    return (
        <Page title='Пользователи'>
            <CommonForm
                entity={user}
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
