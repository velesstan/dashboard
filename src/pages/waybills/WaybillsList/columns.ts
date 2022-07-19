import dayjs from 'dayjs';

import type { DataColumn, Waybill } from 'interfaces';

import { getWaybillType } from './helpers';

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
        title: 'Тип накладной',
        render: ({ action }) => getWaybillType(action),
    },
    {
        title: 'Итого',
        render: () => '',
    },
    {
        title: 'Пользователь',
        dataIndex: 'user',
    },
    {
        title: 'Действия',
        render: () => '',
    },
];

export default columns;
