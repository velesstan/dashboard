import dayjs from 'dayjs';

import type { DataColumn, BaseEntity } from 'interfaces';

const defaultColumns: Array<DataColumn<BaseEntity>> = [
    {
        title: 'Создано',
        render: entity => dayjs(entity.createdAt).format('DD/MM/YYYY'),
    },
    {
        title: 'Обновлено',
        render: entity => dayjs(entity.updatedAt).format('DD/MM/YYYY'),
    },
];

export default defaultColumns;
