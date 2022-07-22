import type { DataColumn, Product } from 'interfaces';

const columns: Array<DataColumn<Product>> = [
    {
        title: 'Категория',
        dataIndex: ['category', 'title'],
    },
    {
        title: 'СИ',
        dataIndex: 'unit',
    },
    {
        title: 'Код',
        dataIndex: 'code',
    },
    {
        title: 'Название',
        dataIndex: 'title',
    },
    {
        title: 'Цена розн.',
        dataIndex: 'price_retail',
    },
    {
        title: 'Цена опт.',
        dataIndex: 'price_wholesale',
    },
];

export default columns;
