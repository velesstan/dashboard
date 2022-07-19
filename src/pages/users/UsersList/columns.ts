import type { DataColumn } from 'interfaces';
import type { User } from 'store/features/users';

const columns: Array<DataColumn<User>> = [
    {
        title: 'Имя',
        dataIndex: 'username',
    },
];

export default columns;
