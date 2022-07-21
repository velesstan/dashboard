import { DataColumn, Transaction } from 'interfaces';

const columns: Array<DataColumn<Transaction>> = [
    {
        title: 'Категория',
        dataIndex: ['product', 'category', 'title'],
    },
    {
        title: 'Код',
        dataIndex: ['product', 'code'],
    },
    {
        title: 'Количество',
        dataIndex: ['quantity'],
    },
    {
        title: 'Цена',
        dataIndex: ['product', 'price_retail'],
    },
];

export default columns;
