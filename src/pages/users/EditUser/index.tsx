import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { Page } from 'components/Page';
import { User } from 'interfaces';

import { UserForm } from './form';

export const EditUser: React.FC = () => {
    const { id } = useParams();
    const { state } = useLocation() as { state: { user: User } };

    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        setUser(state.user || null);
    }, [state]);

    const onSave = (user: User) => {
        if (id) {
            console.log('Should update');
        } else {
            console.log('Should create');
        }
        void console.log(user);
    };

    return (
        <Page title='Пользователи'>
            <UserForm onSave={onSave} user={user} />
        </Page>
    );
};
