import type { DataColumn, Product } from 'interfaces';

const columns: Array<DataColumn<Product>> = [
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Код',
        dataIndex: 'code',
    },
];

export default columns;
