import React from 'react';

import type { DataColumn, User } from 'interfaces';

const columns: Array<DataColumn<User>> = [
    {
        title: 'Логин',
        dataIndex: 'username',
    },
    {
        title: 'Имя',
        dataIndex: 'firstName',
    },
    {
        title: 'Фамилия',
        dataIndex: 'lastName',
    },
    {
        title: 'Уровень доступа',
        dataIndex: ['role', 'title'],
    },
];

export default columns;
