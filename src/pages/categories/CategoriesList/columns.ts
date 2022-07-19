import type { DataColumn } from 'interfaces';
import type { Category } from 'store/features/categories';

const columns: Array<DataColumn<Category>> = [
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Приоритет',
        dataIndex: 'priority',
    },
];

export default columns;
