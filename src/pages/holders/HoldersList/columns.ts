import type { DataColumn, Holder } from 'interfaces';
import { renderHolderType } from 'utils';
const columns: Array<DataColumn<Holder>> = [
    {
        title: 'Тип',
        render: entity => renderHolderType(entity.type),
    },
    {
        title: 'Название',
        dataIndex: ['title'],
    },
];

export default columns;
