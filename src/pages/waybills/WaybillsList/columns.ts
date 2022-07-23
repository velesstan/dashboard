import dayjs from 'dayjs';

import type { DataColumn, Waybill } from 'interfaces';
import { getWaybillActionType } from 'utils';

const columns: Array<DataColumn<Waybill>> = [
    {
        title: '#',
        dataIndex: ['serial'],
    },
    {
        title: 'Дата',
        render: entity => dayjs(entity.createdAt).format('DD/MM/YYYY HH:mm'),
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
        title: 'Процесс',
        render: ({ action }) => getWaybillActionType(action),
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
