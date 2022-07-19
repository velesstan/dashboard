import type { DataColumn, Category } from 'interfaces';

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
