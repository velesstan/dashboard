import dayjs from 'dayjs';

import type { DataColumn, Waybill } from 'interfaces';

import { getWaybillActionType } from './helpers';

const columns: Array<DataColumn<Waybill>> = [
    {
        title: '#',
        render: () => '',
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
        dataIndex: 'user',
    },
];

export default columns;
