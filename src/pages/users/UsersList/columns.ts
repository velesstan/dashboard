import type { DataColumn, User } from 'interfaces';

const columns: Array<DataColumn<User>> = [
    {
        title: 'Имя',
        dataIndex: 'username',
    },
];

export default columns;
