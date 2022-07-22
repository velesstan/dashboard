import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Page } from 'components/Page';
import { User } from 'interfaces';
import { useUpdateUserMutation } from 'store/features';

import { UserForm } from './form';

export const EditUser: React.FC = () => {
    const { id } = useParams();
    const { state } = useLocation() as { state: { user: User } };

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
            <UserForm onSave={onSave} user={user} />
        </Page>
    );
};
