import { Tag } from 'antd';
import dayjs from 'dayjs';

import type { DataColumn, BaseEntity } from 'interfaces';

const defaultColumns: Array<DataColumn<BaseEntity>> = [
    {
        title: 'Статус',
        render: ({ enabled }) => (
            <Tag color={enabled ? 'success' : 'warning'}>
                {enabled ? 'Активно' : 'Инактивно'}
            </Tag>
        ),
        width: 0,
    },
    {
        title: 'Создано',
        render: entity => dayjs(entity.createdAt).format('DD/MM/YYYY'),
        width: 0,
    },
    {
        title: 'Обновлено',
        render: entity => dayjs(entity.updatedAt).format('DD/MM/YYYY'),
        width: 0,
    },
];

export default defaultColumns;
