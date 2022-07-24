import type { DataColumn, Waybill } from 'interfaces';
import { getWaybillActionType } from 'utils';

const columns: Array<DataColumn<Waybill>> = [
    {
        title: '#',
        dataIndex: ['serial'],
    },
    {
        title: 'Процесс',
        render: ({ action }) => getWaybillActionType(action),
    },
    {
        title: 'От',
        dataIndex: ['source', 'title'],
    },
    {
        title: 'Кому',
        dataIndex: ['destination', 'title'],
    },
    {
        title: 'Итого',
        render: () => '',
    },
    {
        title: 'Пользователь',
        render: ({ user }) => `${user.firstName} ${user.lastName}`,
    },
];

export default columns;
